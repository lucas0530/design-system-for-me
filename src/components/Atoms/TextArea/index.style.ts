import styled from '@emotion/styled';

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.transparent};
  border: 0;
  resize: none;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;

  &:focus-visible {
    outline: 0;
  }
`;
