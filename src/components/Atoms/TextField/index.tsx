import React from 'react';

import TextFieldContainer from './container';
import { Input } from './index.style';

import type { TextFieldProps } from './index.type';

const TextField = React.forwardRef(function forwardTextField(
  props: TextFieldProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { containerProps, right, ...inputProps } = props;

  return (
    <TextFieldContainer {...containerProps} right={right}>
      <Input {...inputProps} ref={ref} />
    </TextFieldContainer>
  );
});

export default TextField;
