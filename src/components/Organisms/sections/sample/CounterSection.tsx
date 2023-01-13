import { Flex } from '@/components/Atoms';
import CountDecrementButton from '@/components/Molecules/components/sample/CounterDecrementButton';
import CountIncrementButton from '@/components/Molecules/components/sample/CounterIncrementButton';
import CountLabel from '@/components/Molecules/components/sample/CounterLabel';
import {
  useCount,
  useCountDecrement,
  useCountIncrement,
} from '@/components/Organisms/layouts/sample';

const CounterSection = () => {
  const countValue = useCount();
  const incrementCount = useCountIncrement();
  const decrementCount = useCountDecrement();

  return (
    <Flex align="center">
      <CountLabel value={countValue} />
      <CountIncrementButton onClick={incrementCount} />
      <CountDecrementButton onClick={decrementCount} />
    </Flex>
  );
};

export default CounterSection;
