import { createContext, useState } from 'react';

import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { CommonProviderLayoutProps } from './index.type';

export const modalContext = createContext<{
  setModalElement: React.Dispatch<React.SetStateAction<EmotionJSX.Element>>;
} | null>(null);

const ModalProvider = (props: CommonProviderLayoutProps) => {
  const { children } = props;
  const [modalElement, setModalElement] = useState(<></>);

  return (
    <modalContext.Provider value={{ setModalElement }}>
      {modalElement}
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
