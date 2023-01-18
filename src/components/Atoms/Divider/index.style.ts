import styled from '@emotion/styled';

import { Flex } from '@/components/Atoms';
import { getColor, getSize } from '@/utils/emotion';

import type { DividerProps } from './index.type';

export const DividerBase = styled(Flex)<DividerProps>`
  height: ${(props) => getSize(props.size)};
  background-color: ${({ color = 'black' }) => getColor(color)};
`;
