import { Button } from '@/components/Atoms';

import type { CounterIncrementButtonProps } from './CounterIncrementButton.type';

const CountIncrementButton = (props: CounterIncrementButtonProps) => {
  const { onClick } = props;

  return (
    <Button size="md" variant="pill" onClick={onClick}>
      +
    </Button>
  );
};

export default CountIncrementButton;
