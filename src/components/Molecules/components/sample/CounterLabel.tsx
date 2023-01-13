import { Typography } from '@/components/Atoms';

import type { CountLabelProps } from './CounterLabel.type';

const CountLabel = (props: CountLabelProps) => {
  const { value } = props;

  return <Typography size="xl">{value}</Typography>;
};

export default CountLabel;
