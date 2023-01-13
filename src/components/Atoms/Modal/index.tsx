import { useEffect } from 'react';
import { Portal } from 'react-portal';

import { Button, Flex, Image, Typography } from '@/components/Atoms';

import { ModalHeader, ModalHeaderWrapper, ModalOverlay, ModalWrapper } from './index.style';

import type { ModalProps } from './index.type';

const Modal = (props: ModalProps) => {
  const { isOpen, onClose, title, children } = props;

  useEffect(() => {
    // 모달이 열리면 document body의 overflow를 hidden으로 변경
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <ModalOverlay onClick={onClose} />
      <ModalWrapper direction="column">
        <ModalHeader justify="center" px={2} py={2}>
          {title && (
            <Typography size="xl" weight="bold">
              {title}
            </Typography>
          )}
          <ModalHeaderWrapper justify="flex-end" px={4} py={0}>
            <Button size="md" onClick={onClose}>
              <Image src="/icons/x-mark.svg" alt="취소 버튼" width={17} height={17} />
            </Button>
          </ModalHeaderWrapper>
        </ModalHeader>
        <Flex px={4} py={4} flex={1}>
          {children}
        </Flex>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
