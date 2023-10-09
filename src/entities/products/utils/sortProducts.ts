import { type Products } from '@/entities/products/services/products';
import { SortEnumTypes } from '@/entities/products/services/filter';
import { sortByOrderWithParam } from '@/shared/libs/utils';
import sortPrice from './sortPrice';

type ValueSortParams = {
  type: 'DESC' | 'ASC';
  param?: string;
};

interface SortParams {
  [key: string]: ValueSortParams;
}

const sortProducts = (items: Products.Item[], sort: SortEnumTypes) => {
  const sortParams: SortParams = {
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

export default sortProducts;
