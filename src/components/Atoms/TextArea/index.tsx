import React from 'react';

import TextAreaContainer from './container';
import { TextArea } from './index.style';

import type { TextFieldProps } from './index.type';

const TextField = React.forwardRef(function forwardTextField(
  props: TextFieldProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>,
) {
  const { ...inputProps } = props;

  return (
    <TextAreaContainer>
      <TextArea {...inputProps} ref={ref} />
    </TextAreaContainer>
  );
});

export default TextField;
