import { Button } from '@/components/Atoms';

import type { CounterDecrementButtonProps } from './CounterDecrementButton.type';

const CountDecrementButton = (props: CounterDecrementButtonProps) => {
  const { onClick } = props;

  return (
    <Button size="md" variant="pill" onClick={onClick}>
      -
    </Button>
  );
};

export default CountDecrementButton;
