import { findIndexByKeyObject } from '@/shared/libs/utils';
import type { Filter } from '../../model/types';

type TGetDefaultSortByTypeProps = {
  items: Filter.SortItem[];
  sort: string;
};

type TGetDefaultSortByType = (props: TGetDefaultSortByTypeProps) => {
  item: Filter.SortItem;
  index: number;
};

export const getDefaultSortByType: TGetDefaultSortByType = ({
  items,
  sort,
}) => {
  const index = findIndexByKeyObject(items, 'type', sort);

  return {
    item: items[index],
    index,
  };
};
