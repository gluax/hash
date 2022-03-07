(hash_util) => {
  const throw_missing_field = (field) => {
    throw new ReferenceError("Missing field (behavior keys?): " + field);
  };
  const gen_state_accessors = (AgentState, agent_schema, custom_getters) => {
    if (custom_getters.agent_id) {
      throw new Error("`agent_id` isn't allowed to have a custom getter.");
    }
    for (var i = 0; i < agent_schema.fields.length; ++i) {
      const name = agent_schema.fields[i].name;
      let getter;
      let setter;
      if (name === "agent_id") {
        getter = function() {
          return hash_util.uuid_to_str(this.__cols.agent_id[this.__idx_in_group]);
        };
        setter = function(value) {
          throw new ReferenceError("`agent_id` is read-only");
        };
      } else {
        const custom = custom_getters[name];
        if (custom) {
          getter = function() {
            if (!this.__cols[name]) {
              if (this.__dyn_access) {
                this.__cols[name] = this.__group_state.load(name);
              } else {
                throw_missing_field(name);
              }
            }
            return custom(this, this.__cols[name][this.__idx_in_group]);
          };
        } else {
          getter = function() {
            if (!this.__cols[name]) {
              if (this.__dyn_access) {
                this.__cols[name] = this.__group_state.load(name);
              } else {
                throw_missing_field(name);
              }
            }
            return this.__cols[name][this.__idx_in_group];
          };
        }
        setter = function(value) {
          if (!this.__cols[name]) {
            if (this.__dyn_access) {
              this.__cols[name] = this.__group_state.load(name);
            } else {
              throw_missing_field(name);
            }
          }
          this.__cols[name][this.__idx_in_group] = value;
        };
      }
      Object.defineProperty(AgentState.prototype, name, {
        get: getter,
        set: setter
      });
    }
    const msgs_getter = function() {
      const idx = this.__idx_in_group;
      return this.__msgs[idx];
    };
    const msgs_setter = function(value) {
      this.__msgs[this.__idx_in_group] = value;
    };
    Object.defineProperty(AgentState.prototype, "messages", {
      get: msgs_getter,
      set: msgs_setter
    });
  };
  const gen_agent_state = (agent_schema, getters) => {
    const AgentState = function(group_state, i_agent_in_group) {
      this.__group_state = group_state;
      this.__cols = group_state.__agent_batch.cols;
      this.__msgs = group_state.__msg_batch.cols.messages;
      this.__idx_in_group = i_agent_in_group;
      this.__dyn_access = false;
    };
    AgentState.prototype.set_dynamic_access = function(enable_dynamic_access) {
      this.__dyn_access = enable_dynamic_access;
    };
    AgentState.prototype.to_json = function() {
      const r = {};
      for (var i = 0; i < agent_schema.length; ++i) {
        const name = agent_schema.fields[i].name;
        r[name] = hash_util.json_deepcopy(this[name]);
      }
      r.messages = hash_util.json_deepcopy(this.messages);
      return r;
    };
    AgentState.prototype.get = function(field_name) {
      return hash_util.json_deepcopy(this[field_name]);
    };
    AgentState.prototype.set = function(field_name, value) {
      this[field_name] = hash_util.json_deepcopy(value);
    };
    AgentState.prototype.modify = function(field_name, fn) {
      this.set(field_name, fn(this.get(field_name)));
    };
    AgentState.prototype.addMessage = function(to, msg_type, data) {
      this.__msgs[this.__idx_in_group].push({
        to: typeof to === "string" ? [to] : to.slice(),
        type: msg_type,
        data: hash_util.json_deepcopy(data)
      });
    };
    AgentState.prototype.behaviorIndex = function() {
      return this.__i_behavior;
    };
    gen_state_accessors(AgentState, agent_schema, getters);
    return Object.seal(AgentState);
  };
  const gen_group_state = (agent_schema, getters) => {
    const AgentState = gen_agent_state(agent_schema, getters);
    const GroupState = function(agent_batch, msg_batch, loaders) {
      this.__agent_batch = agent_batch;
      this.__msg_batch = msg_batch;
      this.__loaders = loaders;
    };
    GroupState.prototype.set_batches = function(agent_batch, msg_batch) {
      this.__agent_batch = agent_batch;
      this.__msg_batch = msg_batch;
    };
    GroupState.prototype.to_json = function() {
      throw new Error("Group state shouldn't be copied to JSON.");
    };
    GroupState.prototype.load = function(field_name) {
      if (!this.__agent_batch.vectors[field_name]) {
        throw_missing_field(field_name);
      }
      return this.__agent_batch.load_col(field_name, this.__loaders[field_name]);
    };
    GroupState.prototype.n_agents = function() {
      return this.__agent_batch.cols.agent_id.length;
    };
    GroupState.prototype.get_agent = function(i_agent_in_group, old_agent_state) {
      if (old_agent_state) {
        old_agent_state.__idx = i_agent_in_group;
        return old_agent_state;
      }
      return new AgentState(this, i_agent_in_group);
    };
    GroupState.prototype.flush_changes = function(schema) {
      const skip = /* @__PURE__ */ Object.create(null);
      skip.agent_id = true;
      const agent_changes = this.__agent_batch.flush_changes(schema.agent, skip);
      const group_msgs = this.__msg_batch.cols.messages;
      for (var i_agent = 0; i_agent < group_msgs.length; ++i_agent) {
        const agent_msgs = group_msgs[i_agent];
        for (var i = 0; i < agent_msgs.length; ++i) {
          agent_msgs[i].data = JSON.stringify(agent_msgs[i].data);
        }
      }
      const msg_changes = this.__msg_batch.flush_changes(schema.msg, {});
      return {
        agent: agent_changes,
        msg: msg_changes
      };
    };
    return Object.seal(GroupState);
  };
  return gen_group_state;
};
