import { Flex } from "@/components/Atoms";

import type { FlexProps } from "@/components/Atoms/Flex/index.type";

type BodyProps = FlexProps & {
  children: JSX.Element | JSX.Element[];
};

const Body = (props: BodyProps) => {
  const { children, ...rest } = props;

  return <Flex {...rest}>{children}</Flex>;
};

export default Body;
