import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import { theme as baseTheme } from "@/constants/theme";

import type { ThemeProviderProps } from "./index.type";

export const ThemeProvider = ({
  theme = baseTheme,
  ...props
}: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={baseTheme} {...props} />;
};
