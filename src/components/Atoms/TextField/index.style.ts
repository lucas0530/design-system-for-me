import styled from '@emotion/styled';

import { getColor } from '@/utils/emotion';

import type { TextFieldProps } from './index.type';

export const Input = styled.input<TextFieldProps>`
  background-color: ${({ theme }) => theme.colors.transparent};
  border: 0;

  font-size: 16px;
  line-height: 19px;
  color: ${({ color = 'black' }) => getColor(color)};
  width: 100%;

  &:focus-visible {
    outline: 0;
  }
`;
