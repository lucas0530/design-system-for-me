import { useCallback, useContext } from 'react';

import { modalContext } from '@/components/Providers/ModalProvider';

import type React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const useModal = (component: (props: ModalProps) => React.ReactElement) => {
  const context = useContext(modalContext);

  const closeModal = useCallback(() => {
    context?.setModalElement(
      component({
        isOpen: false,
        onClose: closeModal,
      }),
    );
  }, [component, context]);

  const openModal = useCallback(() => {
    context?.setModalElement(
      component({
        isOpen: true,
        onClose: closeModal,
      }),
    );
  }, [closeModal, component, context]);

  if (!context) {
    throw Error('useModal은 ModalProvider 내부에서 호출되어야 합니다.');
  }

  return { openModal, closeModal };
};

export default useModal;
