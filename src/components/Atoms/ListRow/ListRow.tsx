import { ListRowBase } from './ListRow.style';

import type { ListRowProps } from './ListRow.type';

const ListRow = ({ className, left, contents, right, props }: ListRowProps) => {
  return (
    <ListRowBase className={className} align="center" {...props}>
      {left}
      {contents}
      {right}
    </ListRowBase>
  );
};

export default ListRow;
