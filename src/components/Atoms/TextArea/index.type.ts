import type { ComponentProps } from 'react';
import type { TextAreaContainerProps } from './container.type';

export type TextFieldProps = TextAreaContainerProps & ComponentProps<'textarea'>;
