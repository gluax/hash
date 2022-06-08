import { theme } from "@hashintel/hash-design-system";

// @todo reviese the colors here
const NODE_COLORS = {
  opened: theme.palette.green[50],
  reviewed: theme.palette.blue[50],
  review_requested: theme.palette.orange[50],
  ready_for_review: theme.palette.teal[60],
  closed: theme.palette.red[60],
  merged: theme.palette.mint[60],
  mentioned: theme.palette.red[50],
} as { [k: string]: string };

export const getNodeColor = (eventType: string) => {
  if (eventType in NODE_COLORS) {
    return NODE_COLORS[eventType];
  }

  return theme.palette.gray[40];
};
