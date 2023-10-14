import type { TagTypes } from '@/entities/tag/';

export namespace Filter {
  export type Filtered = TagTypes.Variable;

  export type CategoryId = number;

  export type State = {
    filtered: Filtered;
    sort: SortEnumTypes;
    category: CategoryId;
  };

  export interface Sort {
    type: SortEnumTypes;
    value: string;
  }
}

export enum SortEnumTypes {
  ASC_POPULAR = 'ASC_POPULAR',
  DESC_POPULAR = 'DESC_POPULAR',
  ASC_PRICE = 'ASC_PRICE',
  DESC_PRICE = 'DESC_PRICE',
  ASC_ALPHABET = 'ASC_APLHABET',
  DESC_ALPHABET = 'DESC_APLHABET',
}
