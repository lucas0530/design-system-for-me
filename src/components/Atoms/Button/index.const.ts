import type {
  ButtonProps,
  ButtonSize,
  ButtonStyle,
  ButtonThemes,
  ButtonVariant,
} from './index.type';

export const BUTTON_SIZES: Record<ButtonVariant, Record<ButtonSize, ButtonStyle>> = {
  link: {
    md: {
      border: 0,
      fontSize: 'md',
      bgColor: 'transparent',
      px: 0,
      py: 0,
      mx: 0,
      my: 0,
    },
    lg: {},
  },
  pill: {
    md: {
      border: 0,
      fontSize: 'md',
      bgColor: 'gray.200',
      px: 3,
      py: 2,
      mx: 0,
      my: 0,
    },
    lg: {
      border: 0,
      fontSize: 'md',
      bgColor: 'gray.200',
      px: 3,
      py: 3,
      mx: 0,
      my: 0,
    },
  },
};

export const BUTTON_THEME: Record<ButtonThemes, Partial<ButtonProps>> = {
  default: {},
  primary: {
    bgColor: 'primary',
    _text: {
      size: 'md',
      color: 'white',
      weight: 'bold',
    },
  },
};
