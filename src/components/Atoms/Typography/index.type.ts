import type { CSSProperties, ElementType } from "react";
import type {
  IColorType,
  TypographySize,
  TypographyWeight,
} from "@/types/emotion";
import type { OverridableProps } from "@/utils/type";
import type { DEFAULT_TYPOGRAPHY_ELEMENT } from "./index.const";

export type TextBaseProps = {
  weight?: TypographyWeight;
  size: TypographySize;
  color?: IColorType;
  align?: CSSProperties["textAlign"];
  lineHeight?: CSSProperties["lineHeight"];
  strike?: boolean;
  lines?: number;
};

export type TextProps<
  T extends ElementType = typeof DEFAULT_TYPOGRAPHY_ELEMENT
> = OverridableProps<T, TextBaseProps>;
