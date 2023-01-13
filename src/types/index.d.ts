import '@emotion/react';

import type { Theme as AppTheme } from './emotion';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
