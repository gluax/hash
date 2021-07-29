import { Connection } from "./types";
import { EntityMeta } from "../adapter";

import { sql } from "slonik";

export const insertEntityMetadata = async (
  conn: Connection,
  params: {
    accountId: string;
    metadataId: string;
    versioned: boolean;
    extra: any;
  }
): Promise<EntityMeta> => {
  await conn.query(sql`
    insert into entity_metadata (account_id, metadata_id, versioned, extra)
    values (
      ${params.accountId}, ${params.metadataId}, ${params.versioned},
      ${sql.json(params.extra)}
    )
  `);
  return params;
};

export const updateEntityMetadata = async (
  conn: Connection,
  params: {
    accountId: string;
    metadataId: string;
    extra: any;
  }
): Promise<EntityMeta> => {
  const row = await conn.one(sql`
    update entity_metadata
    set extra = ${sql.json(params.extra)}
    where
      account_id = ${params.accountId} and metadata_id = ${params.metadataId}
    returning *
  `);
  return {
    metadataId: row["metadata_id"] as string,
    versioned: row["versioned"] as boolean,
    extra: row["extra"],
  };
};
