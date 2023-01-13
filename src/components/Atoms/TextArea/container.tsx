import { TextAreaContainerBase } from './container.style';

import type { TextAreaContainerProps } from './container.type';

const TextAreaContainer = (props: TextAreaContainerProps) => {
  const { children } = props;

  return <TextAreaContainerBase>{children}</TextAreaContainerBase>;
};

export default TextAreaContainer;
