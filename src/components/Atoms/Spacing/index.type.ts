import type { CSSProperties } from 'react';

export type SpacingProps = {
  size: CSSProperties['height'];
  direction?: 'horizontal' | 'vertical';
};
