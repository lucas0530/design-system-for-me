import { injectGlobal } from '@emotion/css';
import emotionReset from 'emotion-reset';

import '../font.css';
import ModalProvider from '@/components/Providers/ModalProvider';
import { ThemeProvider } from '@/components/Providers/ThemeProvider';

import type { AppProps } from 'next/app';

injectGlobal`
  ${emotionReset}
  
  body {
    margin: 0;
  }

  html {
    font-family: AppleSDGothic, Roboto, Helvetica, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #37485D !important;
  } 
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  );
}
