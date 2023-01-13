import type { CSSProperties } from 'react';
import type { IColorType, SpacingLayout } from '@/types/emotion';

export type DividerProps = {
  h: CSSProperties['height'];
  color?: IColorType;
} & SpacingLayout;
