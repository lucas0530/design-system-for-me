import { useCallback, useState } from 'react';

const useSampleLayout = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevState) => prevState - 1);
  }, []);

  return {
    count,
    increment,
    decrement,
  };
};

export default useSampleLayout;
