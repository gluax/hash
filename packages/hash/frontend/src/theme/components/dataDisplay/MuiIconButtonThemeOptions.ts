import { Components, Theme } from "@mui/material";

export const MuiIconButtonThemeOptions: Components<Theme>["MuiIconButton"] = {
  defaultProps: {
    disableFocusRipple: true,
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: theme.palette.gray[50],

      "& svg": {
        color: "currentColor",
      },

      "&:hover": {
        backgroundColor: theme.palette.gray[30],
        color: theme.palette.gray[80],
      },

      "&:focus": {
        outline: "none",
      },

      "&:focus-visible": {
        outline: `2px solid ${theme.palette.blue[70]}`,
        outlineOffset: "2px",
      },

      ...(ownerState.size === "xs" && {
        "& svg": {
          fontSize: 8,
        },
      }),

      ...(ownerState.size === "small" && {
        "& svg": {
          fontSize: 12,
        },
      }),

      ...(ownerState.size === "medium" && {
        "& svg": {
          fontSize: 16,
        },
      }),

      ...(ownerState.size === "large" && {
        "& svg": {
          fontSize: 20,
        },
      }),
    }),
  },
};
