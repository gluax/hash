(arrow, hash_util) => {
  "use strict";
  const Batch = function() {
    this.mem_version = -1;
    this.batch_version = -1;
    this.mem = null;
    this.vectors = {};
    this.cols = {};
  };
  const get_u64 = (dataview, offset) => {
    const left = dataview.getUint32(offset, true);
    const right = dataview.getUint32(offset + 4, true);
    const combined = left + 2 ** 32 * right;
    if (!Number.isSafeInteger(combined)) {
      throw new RangeError(combined + " exceeds MAX_SAFE_INTEGER.");
    }
    return combined;
  };
  const parse_any_type_fields = (metadata) => {
    const any_type_fields = /* @__PURE__ */ new Set();
    let field_names = metadata.get("any_type_fields");
    if (field_names) {
      for (let field_name of field_names.split(",")) {
        any_type_fields.add(field_name);
      }
    }
    return any_type_fields;
  };
  const load_vectors = (rb_bytes, schema) => {
    const reader = new arrow.MessageReader(rb_bytes);
    const msg = reader.readMessage();
    const header = msg.header();
    const body = reader.readMessageBody(msg.bodyLength);
    const dicts = /* @__PURE__ */ new Map();
    const loader = new reader.VectorLoader(body, header.nodes, header.buffers, dicts);
    const vector_list = loader.visitMany(schema.fields);
    const any_type_fields = parse_any_type_fields(schema.metadata);
    const vectors = {};
    for (var i = 0; i < vector_list.length; ++i) {
      const vector = new arrow.makeVector(vector_list[i]);
      const field = schema.fields[i];
      vector.type.is_any = any_type_fields.has(field.name);
      vectors[field.name] = vector;
    }
    return vectors;
  };
  const load_markers = (shared_bytes) => {
    const dataview = new DataView(shared_bytes);
    const m = {
      schema_offset: get_u64(dataview, 0 * 8),
      schema_size: get_u64(dataview, 1 * 8),
      header_offset: get_u64(dataview, 2 * 8),
      header_size: get_u64(dataview, 3 * 8),
      meta_offset: get_u64(dataview, 4 * 8),
      meta_size: get_u64(dataview, 5 * 8),
      data_offset: get_u64(dataview, 6 * 8),
      data_size: get_u64(dataview, 7 * 8)
    };
    if (m.schema_offset + m.schema_size > m.header_offset) {
      throw new RangeError("schema marker");
    }
    if (m.header_offset + m.header_size > m.meta_offset) {
      throw new RangeError("header marker");
    }
    if (m.meta_offset + m.meta_size > m.data_offset) {
      throw new RangeError("meta marker");
    }
    if (m.data_offset + m.data_size > shared_bytes.length) {
      throw new RangeError("data marker");
    }
    return m;
  };
  const load_marked_vectors = (shared_bytes, schema) => {
    const m = load_markers(shared_bytes);
    const n_rb_bytes = m.data_offset + m.data_size - m.meta_offset;
    const rb_bytes = new Uint8Array(shared_bytes, m.meta_offset, n_rb_bytes);
    return load_vectors(rb_bytes, schema);
  };
  Batch.prototype.sync = function(latest_batch, schema) {
    const should_load = this.batch_version < latest_batch.batch_version;
    if (this.mem_version < latest_batch.mem_version) {
      if (!should_load) {
        throw new Error("Should be impossible to have new memory without new batch");
      }
      this.mem = latest_batch.mem;
      this.mem_version = latest_batch.mem_version;
    }
    if (should_load) {
      this.vectors = load_marked_vectors(this.mem, schema);
      this.cols = {};
      this.batch_version = latest_batch.batch_version;
    }
  };
  Batch.prototype.load_col = function(name, loader) {
    const vector = this.vectors[name];
    if (!vector)
      throw new ReferenceError("Missing vector for " + name);
    let col;
    if (loader) {
      col = loader(vector);
    } else if (name.startsWith("_HIDDEN_") || name.startsWith("_PRIVATE_")) {
      col = hash_util.load_shallow(vector);
    } else {
      col = hash_util.load_full(vector);
    }
    return this.cols[name] = col;
  };
  Batch.prototype.load_missing_cols = function(schema, loaders) {
    for (var i = 0; i < schema.fields.length; ++i) {
      const name = schema.fields[i].name;
      if (!this.cols[name])
        this.load_col(name, loaders[name]);
    }
  };
  const array_data_from_col = (col, field_type) => {
    const builder = new arrow.makeBuilder({
      type: field_type,
      nullValues: [null, void 0]
    });
    try {
      for (var i_agent = 0; i_agent < col.length; ++i_agent) {
        builder.append(col[i_agent]);
      }
    } catch (e) {
      throw new Error("Flushing error: " + JSON.stringify([i_agent, col[i_agent], field_type, String(e)]));
    }
    builder.finish();
    return builder.flush();
  };
  const ffi_data_from_array_data = (array_data) => {
    const child_data = [];
    for (var i = 0; i < array_data.children.length; ++i) {
      child_data[i] = ffi_data_from_array_data(array_data.children[i]);
    }
    const buffers = [];
    const offsets = array_data.valueOffsets;
    const values = array_data.values;
    if (offsets) {
      buffers[0] = offsets.buffer;
      if (values)
        buffers.push(values.buffer);
    } else if (values) {
      buffers[0] = values.buffer;
    }
    return {
      len: array_data.length,
      null_count: array_data.nullCount,
      null_bits: array_data.nullBitmap.buffer,
      buffers,
      child_data
    };
  };
  Batch.prototype.flush_changes = function(schema, skip) {
    const changes = [];
    for (var i_field = 0; i_field < schema.fields.length; ++i_field) {
      const field = schema.fields[i_field];
      const col = this.cols[field.name];
      if (!col)
        continue;
      if (this.vectors[field.name].type.is_any) {
        for (var i_agent = 0; i_agent < col.length; ++i_agent) {
          col[i_agent] = JSON.stringify(col[i_agent]);
        }
      }
      const array_data = array_data_from_col(col, field.type);
      const data = ffi_data_from_array_data(array_data);
      changes.push({
        i_field,
        data
      });
    }
    return changes;
  };
  const Batches = function() {
    this.batches = {};
  };
  Batches.prototype.get = function(batch_id) {
    return this.batches[batch_id];
  };
  Batches.prototype.sync = function(latest_batch, schema) {
    let loaded_batch = this.batches[latest_batch.id];
    if (!loaded_batch) {
      this.batches[latest_batch.id] = loaded_batch = new Batch();
    }
    loaded_batch.sync(latest_batch, schema);
    return loaded_batch;
  };
  return Batches;
};
