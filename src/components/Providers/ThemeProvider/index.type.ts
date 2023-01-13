import type { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import type { ComponentProps } from "react";
import type { Theme } from "@/constants/theme";

export type ThemeProviderProps = {
  theme?: Theme;
} & Omit<ComponentProps<typeof EmotionThemeProvider>, "theme">;
