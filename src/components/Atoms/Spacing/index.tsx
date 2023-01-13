import { SpacingBase } from './index.style';

import type { SpacingProps } from './index.type';

const Spacing = (props: SpacingProps) => {
  const { size, direction = 'vertical' } = props;

  return <SpacingBase size={size} direction={direction} />;
};

export default Spacing;
