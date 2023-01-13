import type React from 'react';
import type { FlexProps } from '@/components/Atoms/Flex/index.type';

/** TODO: 타입 의존성 결합이 다소 있지 않은지 체크 */
export type TextFieldContainerProps = React.PropsWithChildren<{
  containerProps?: FlexProps;
  right?: React.ReactNode;
}>;
