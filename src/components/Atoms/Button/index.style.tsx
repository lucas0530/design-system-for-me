import styled from '@emotion/styled';

import { getColor, marginSpacingStyle, paddingSpacingStyle } from '@/utils/emotion';

import type { ButtonProps } from './index.type';

export const ButtonBase = styled.button<Partial<ButtonProps>>`
  height: ${(props) => props.height};
  cursor: pointer;
  ${(props) => (props.bgColor ? `background-color: ${getColor(props.bgColor)}` : null)};
  border: ${(props) => props.border ?? 0};
  border-radius: ${(props) => props.borderRadius ?? '8px'};

  ${marginSpacingStyle};
  ${paddingSpacingStyle};
`;
