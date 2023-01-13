import styled from '@emotion/styled';

import type { SpacingProps } from './index.type';

export const SpacingBase = styled.div<SpacingProps>`
  flex: none;
  ${({ direction }) => (direction === 'horizontal' ? 'width' : 'height')}: ${(props) => props.size};
`;
