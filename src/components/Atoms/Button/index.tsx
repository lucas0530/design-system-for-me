import { isValidElement } from 'react';

import { Flex, Typography } from '@/components/Atoms';

import { BUTTON_SIZES, BUTTON_THEME } from './index.const';
import { ButtonBase } from './index.style';

import type { ButtonProps } from './index.type';

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const { size, _text, variant = 'link', themes = 'default', children } = props;

  const { fontSize, ...styles } = BUTTON_SIZES[variant][size];

  const { _text: themeTextStyles, ...themeStyles } = BUTTON_THEME[themes];

  return (
    <ButtonBase {...styles} {...props} {...themeStyles}>
      <Flex direction="row" align="center" justify="center" space="0.5rem">
        {isValidElement(children) ? (
          children
        ) : (
          <Typography
            size={fontSize ?? 'md'}
            weight={_text?.weight ?? 'regular'}
            {..._text}
            {...themeTextStyles}
          >
            {children}
          </Typography>
        )}
      </Flex>
    </ButtonBase>
  );
};

export default Button;
