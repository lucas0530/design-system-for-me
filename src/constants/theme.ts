import breakPoints from "./themeAssets/breakpoints";
import colors from "./themeAssets/colors";
import { typography } from "./themeAssets/typograhy";

export const theme = {
  colors,
  typography,
  breakPoints,
};

export type Theme = typeof theme;
