import { sortByOrderWithParam } from '@/shared/libs/utils';
import { type ProductTypes } from '@/entities/product';
import { SortEnumTypes } from '../../model/types';
import { sortPrice } from './sortPrice';

type TValueSortProps = {
  type: 'DESC' | 'ASC';
  param?: string;
};

interface ISortArray {
  [key: string]: TValueSortProps;
}

export const sortProducts = (
  items: ProductTypes.Item[],
  sort: SortEnumTypes,
): ProductTypes.Item[] => {
  const sortParams: ISortArray = {
    [SortEnumTypes.ASC_POPULAR]: { type: 'ASC', param: 'priority' },
    [SortEnumTypes.ASC_ALPHABET]: { type: 'ASC', param: 'title' },
    [SortEnumTypes.ASC_PRICE]: { type: 'ASC' },
    [SortEnumTypes.DESC_POPULAR]: { type: 'DESC', param: 'priority' },
    [SortEnumTypes.DESC_ALPHABET]: { type: 'DESC', param: 'title' },
    [SortEnumTypes.DESC_PRICE]: { type: 'DESC' },
  };

  const sortIsPrice =
    sort === SortEnumTypes.ASC_PRICE || sort === SortEnumTypes.DESC_PRICE;

  return sortIsPrice
    ? sortPrice(sortParams[sort].type, items)
    : sortByOrderWithParam(
        sortParams[sort].type,
        items,
        sortParams[sort].param!,
      );
};
