import type React from 'react';

export type ModalProps = React.PropsWithChildren<{
  isOpen: boolean;
  title: string;
  onClose: () => void;
}>;
