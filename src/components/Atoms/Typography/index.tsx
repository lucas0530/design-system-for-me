import React from 'react';

import { DEFAULT_TYPOGRAPHY_ELEMENT } from './index.const';
import { typographyComponentBuilder } from './index.style';

import type { ElementType } from 'react';
import type { TextProps } from './index.type';

const Typography = <T extends React.PropsWithChildren<ElementType>>(props: TextProps<T>) => {
  const { className, as, strike, children, weight, size, ...rest } = props;

  const Component = (as ?? DEFAULT_TYPOGRAPHY_ELEMENT) as keyof JSX.IntrinsicElements;

  const Text = typographyComponentBuilder(Component);

  return (
    <Text {...rest} weight={weight} size={size}>
      {children}
    </Text>
  );
};

export default Typography;
