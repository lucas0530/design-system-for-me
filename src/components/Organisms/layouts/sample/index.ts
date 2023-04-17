import constate from 'constate';

import { compoundBuilder } from '@/utils/builder';

import useSampleLayout from './index.hook';
import { SampleBody, SampleFooter, SampleHeader } from './index.style';

export const [SampleProvider, useCount, useCountIncrement, useCountDecrement] = constate(
  useSampleLayout,
  (value) => value.count,
  (value) => value.increment,
  (value) => value.decrement,
);

const SampleLayout = compoundBuilder(SampleProvider, {
  Header: SampleHeader,
  Body: SampleBody,
  Footer: SampleFooter,
});

export default SampleLayout;
