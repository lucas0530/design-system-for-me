import { compoundBuilder } from '@/utils/builder';

import ListRowBase from './ListRow';
import Text2Rows from './Text2Rows';

const ListRow = compoundBuilder(ListRowBase, {
  compound: {
    Text2Rows,
  },
});

export default ListRow;
