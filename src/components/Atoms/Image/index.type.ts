import type Image from 'next/image';
import type { ComponentProps } from 'react';

export type ImageProps = {
  className?: string;
} & ComponentProps<typeof Image>;
