import { type ISort } from '@/entities/sorted/types';
import { findIndexByKeyObject } from '@/shared/libs/utils';

type TypeGetDefaultParam = {
  items: ISort[];
  sort: string;
};

export const getDefaultSortByType = ({ items, sort }: TypeGetDefaultParam) => {
  const index = findIndexByKeyObject(items, 'type', sort);

  return {
    item: items[index],
    index,
  };
};
