import { Flex } from "@/components/Atoms";

import type { FlexProps } from "@/components/Atoms/Flex/index.type";

type FooterProps = React.PropsWithChildren<FlexProps>;

const Footer = (props: FooterProps) => {
  const { children, ...rest } = props;

  return <Flex {...rest}>{children}</Flex>;
};

export default Footer;
