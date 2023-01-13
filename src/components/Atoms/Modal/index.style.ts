import styled from '@emotion/styled';

import { Flex } from '@/components/Atoms';

export const ModalOverlay = styled(Flex)`
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  opacity: 0.8;
  width: 100%;
  height: 100%;
`;

export const ModalWrapper = styled(Flex)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 8px;

  ${({ theme }) => theme.breakPoints.sm} {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    padding: 0px;
  }
`;

export const ModalHeader = styled(Flex)`
  position: relative;
  width: 100%;
  top: 0%;

  ${({ theme }) => theme.breakPoints.sm} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
  }
`;

export const ModalHeaderWrapper = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;
