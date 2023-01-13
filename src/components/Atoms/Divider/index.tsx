import { DividerBase } from './index.style';

import type { DividerProps } from './index.type';

const Divider = (props: DividerProps) => {
  const { ...rest } = props;

  return <DividerBase {...rest} />;
};

export default Divider;
