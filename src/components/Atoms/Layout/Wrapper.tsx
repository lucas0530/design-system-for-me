import styled from "@emotion/styled";

import { Flex } from "@/components/Atoms";

import type { FlexProps } from "@/components/Atoms/Flex/index.type";

type WrapperProps = React.PropsWithChildren<FlexProps>;

const Wrapper = (props: WrapperProps) => {
  const { children, ...rest } = props;

  return <WrapperBase {...rest}>{children}</WrapperBase>;
};

export default Wrapper;

const WrapperBase = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  flex-direction: column;
  width: inherit;
`;
