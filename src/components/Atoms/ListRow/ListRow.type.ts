import type { ReactNode } from 'react';
import type { FlexProps } from '@/components/Atoms/Flex/index.type';

export type ListRowProps = {
  className?: string;
  left?: ReactNode;
  contents?: ReactNode;
  right?: ReactNode;
  props?: FlexProps;
};
