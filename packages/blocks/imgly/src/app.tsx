import * as React from "react";

import { BlockComponent } from "blockprotocol/react";
import CreativeEditorSDK, { Configuration } from "@cesdk/cesdk-js";
import { BlockProtocolEntity } from "blockprotocol";
import { useMemo } from "react";

type AppProps = {
  config: Configuration;
};

function translateToAssetResult(image: BlockProtocolEntity) {
  if (
    typeof image.file !== "object" ||
    !(image.file as any).url ||
    typeof (image.file as any).url !== "string"
  ) {
    throw new Error(`Entity does not have a 'url' property`);
  }

  const url = (image.file as any).url as string;

  return {
    id: image.entityId,
    type: "ly.img.image",

    thumbUri: url,

    size: {
      width: 600,
      height: 400,
    },

    meta: {
      uri: url,
    },

    context: {
      entityTypeId: image.entityTypeId,
      sourceId: "graph",
    },
  };
}

export const App: BlockComponent<AppProps> = ({
  aggregateEntities,
  entityId,
}) => {
  const cesdk_container = React.useRef(null);

  const config = useMemo<Configuration>(() => {
    const findGraphImages: Configuration["assetSources"][string]["findAssets"] =
      async (_type, queryData) => {
        const { page, perPage } = queryData;

        const { results, operation } = await aggregateEntities({
          operation: {
            itemsPerPage: perPage,
            pageNumber: page,
            multiFilter: {
              filters: [
                {
                  field: "file.url",
                  operator: "ENDS_WITH",
                  value: ".svg",
                },
                {
                  field: "file.url",
                  operator: "ENDS_WITH",
                  value: ".png",
                },
                {
                  field: "file.url",
                  operator: "ENDS_WITH",
                  value: ".jpg",
                },
              ],
              operator: "OR",
            },
          },
        });

        console.log({ results });

        return {
          assets: results.map(translateToAssetResult),
          total: operation.totalCount,
          currentPage: queryData.page,
          nextPage: queryData.page + 1,
        };
      };

    return {
      assetSources: {
        graph: {
          findAssets: findGraphImages,
          credits: {
            name: "Graph images",
          },
        },
      },
      ui: {
        elements: {
          navigation: {
            show: true, // 'false' to hide the navigation completely
            action: {
              close: false, // true or false
              back: false, // true or false
              load: true, // true or false
              save: true, // true or false
              export: {
                show: true,
                format: ["image/png"],
              },
              download: true, // true  or false
            },
          },
          panels: {
            settings: {
              show: false, // true or false
            },
          },
          dock: {
            iconSize: "large", // 'large' or 'normal'
            hideLabels: false, // false or true
          },
          libraries: {
            template: true, // true or false
            image: true, // true or false
            text: true, // true or false
            element: true, // true or false
            panel: {
              insert: {
                floating: true, // true or false
              },
              replace: {
                floating: true, // true or false
              },
            },
          },
          blocks: {
            opacity: false, // true  or false
            transform: false, // true  or false
            "//ly.img.ubq/image": {
              adjustments: true, // true  or false
              filters: false, // true  or false
              effects: false, // true  or false
              blur: true, // true  or false
              crop: false, // true  or false
            },
          },
        },
      },
    };
  }, [aggregateEntities]);

  React.useEffect(() => {
    if (cesdk_container.current) {
      CreativeEditorSDK.init(cesdk_container.current, config).then(
        (instance) => {
          /** do something with the instance of CreativeEditor SDK **/
        },
      );
    }
  }, [config, cesdk_container]);

  return <div ref={cesdk_container} style={{ width: "100%" }} />;
};
