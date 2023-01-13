import { ContainerRightWrapper, TextFieldContainerBase } from './container.style';

import type { TextFieldContainerProps } from './container.type';

const TextFieldContainer = (props: TextFieldContainerProps) => {
  const { right, children } = props;

  return (
    <TextFieldContainerBase>
      {children}
      <ContainerRightWrapper>{right}</ContainerRightWrapper>
    </TextFieldContainerBase>
  );
};

export default TextFieldContainer;
