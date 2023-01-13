import { Typography } from '@/components/Atoms';

import { Text2RowsBase } from './Text2Rows.style';

import type { Text2RowsProps } from './Text2Rows.type';

const Text2Rows = ({
  top,
  topProps = { size: 'sm' },
  bottom,
  bottomProps = { size: 'sm' },
  props,
}: Text2RowsProps) => {
  return (
    <Text2RowsBase direction="column" {...props}>
      <Typography {...topProps}>{top}</Typography>
      <Typography {...bottomProps}>{bottom}</Typography>
    </Text2RowsBase>
  );
};

export default Text2Rows;
