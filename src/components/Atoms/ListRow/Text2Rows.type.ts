import type { ComponentProps, ReactNode } from "react";
import type { Flex, Typography } from "@/components/Atoms";

export type Text2RowsProps = {
  top: string | ReactNode;
  topProps?: ComponentProps<typeof Typography>;
  bottom: string | ReactNode;
  bottomProps?: ComponentProps<typeof Typography>;
  props?: ComponentProps<typeof Flex>;
};
