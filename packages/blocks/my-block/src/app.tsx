import * as React from "react";

import { BlockComponent } from "blockprotocol/react";
import { useEffect } from "react";
import { BlockProtocolEntity } from "blockprotocol";

type AppProps = {
  name: string;
};

export const App: BlockComponent<AppProps> = ({
  updateEntities,
  createLinks,
  accountId,
  entityId,
  aggregateEntityTypes,
  aggregateEntities,
  entityTypeId,
  name,
  linkedEntities,
  linkGroups,
  entityTypeVersionId,
}) => {
  const [entities, setEntities] = React.useState<BlockProtocolEntity[]>([]);

  useEffect(() => {
    void aggregateEntityTypes({ accountId }).then((response) => {
      const typeToFetchEntitiesFor = response.results[0];
      void aggregateEntities({
        accountId,
        operation: {
          entityTypeId: typeToFetchEntitiesFor.entityTypeId,
        },
      }).then((entityResponse) => {
        setEntities(entityResponse.results);
        const entity = entityResponse.results[0];
        if (entity) {
          void createLinks([
            {
              sourceAccountId: accountId,
              sourceEntityId: entityId,
              destinationAccountId: entity.accountId,
              destinationEntityId: entity.entityId,
              path: "$.myEntity",
            },
          ]);
        } else {
          console.warn(
            `No entities with entityTypeId ${typeToFetchEntitiesFor.entityTypeId} available`,
          );
        }
      });
    });
  }, [
    accountId,
    entityId,
    aggregateEntities,
    aggregateEntityTypes,
    createLinks,
  ]);

  useEffect(() => {
    setTimeout(
      () =>
        void updateEntities([
          {
            entityId,
            entityTypeId,
            entityTypeVersionId,
            accountId,
            data: {
              name: "updated name",
            },
          },
        ])
          .then((resp) => console.log(`Response from update: `, { resp }))
          .catch((err) => console.error(`Error updating entities: `, err)),
      2000,
    );
  }, [updateEntities, accountId, entityId, entityTypeId, entityTypeVersionId]);

  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>
        The entityId of this block is {entityId}. Use it to update its data when
        calling updateEntities.
      </p>
      <ol>
        {entities.map((entity) => (
          <li key={entity.entityId}>
            <pre>{JSON.stringify(entity, undefined, 2)}</pre>
          </li>
        ))}
      </ol>
    </>
  );
};
