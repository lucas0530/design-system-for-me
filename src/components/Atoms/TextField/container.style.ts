import styled from '@emotion/styled';

import { Flex } from '@/components/Atoms';

export const TextFieldContainerBase = styled(Flex)`
  border: 0.8px solid ${({ theme }) => theme.colors.gray[400]};
  position: relative;
  height: 36px;
  width: 100%;
  border-radius: 8px;
  padding: 10px 20px;
`;

export const ContainerRightWrapper = styled(Flex)`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding-right: 10px;
  align-items: center;
`;
