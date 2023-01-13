import React from "react";

import { Flex } from "@/components/Atoms";

import type { FlexProps } from "@/components/Atoms/Flex/index.type";

type HeaderProps = React.PropsWithChildren<FlexProps>;

const Header = (props: HeaderProps) => {
  const { children, ...rest } = props;

  return <Flex {...rest}>{children}</Flex>;
};

export default Header;
