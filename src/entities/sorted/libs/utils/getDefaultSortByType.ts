import { type ISort } from '@/entities/sorted/types';

type TypeGetDefaultParam = {
  items: ISort[];
  sort: string;
};

export const getDefaultSortByType = ({ items, sort }: TypeGetDefaultParam) => {
  const index = items.findIndex(item => item.type === sort);

  return {
    item: items[index],
    index,
  };
};
