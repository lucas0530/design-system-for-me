import type { ComponentProps } from 'react';
import type { TextBaseProps } from '@/components/Atoms/Typography/index.type';
import type { TextFieldContainerProps } from './container.type';

export type TextFieldProps = TextFieldContainerProps &
  ComponentProps<'input'> &
  Pick<TextBaseProps, 'color'>;
