import styled from '@emotion/styled';

import { Flex } from '@/components/Atoms';

export const ListRowBase = styled(Flex)`
  overflow-x: clip;
  gap: 1rem;

  ${({ theme }) => theme.breakPoints.sm} {
    gap: 0.5rem;
  }
`;
