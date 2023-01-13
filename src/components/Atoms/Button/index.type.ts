import type { ComponentProps, CSSProperties } from 'react';
import type { TextBaseProps } from '@/components/Atoms/Typography/index.type';
import type { IColorType, SpacingLayout, TypographySize } from '@/types/emotion';

export type ButtonSize = 'md' | 'lg';
export type ButtonStyle = {
  height?: string;
  fontSize?: TypographySize;
  bgColor?: IColorType;
  border?: CSSProperties['border'];
  borderRadius?: CSSProperties['borderRadius'];
} & SpacingLayout;

export type ButtonVariant = 'link' | 'pill';
export type ButtonThemes = 'default' | 'primary';

export type ButtonProps = {
  size: ButtonSize;
  themes?: ButtonThemes;
  variant?: ButtonVariant;
  _text?: TextBaseProps;
  fullWidth?: boolean;
} & ComponentProps<'button'> &
  ButtonStyle;
