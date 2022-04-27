import * as React from "react";

import { BlockComponent } from "blockprotocol/react";
import { Vega, VegaLite } from "react-vega";

type AppProps = {
  language: string;
  content: string;
};

export const App: BlockComponent<AppProps> = ({ content }) => {
  const spec = React.useMemo(() => {
    try {
      return JSON.parse(content);
    } catch {
      return undefined;
    }
  }, [content]);

  if (!spec) {
    return <>Error parsing vega spec {content}</>;
  }

  return spec.$schema?.includes("-lite") ? (
    <VegaLite spec={spec} />
  ) : (
    <Vega spec={spec} />
  );
};
