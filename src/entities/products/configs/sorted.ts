import { SortEnumTypes } from '@/entities/products/services/filter';

export const sorted = [
  {
    type: SortEnumTypes.DESC_POPULAR,
    value: 'популярность (MAX)',
    label: 'популярности (MAX)',
  },
  {
    type: SortEnumTypes.ASC_POPULAR,
    value: 'популярность (MIN)',
    label: 'популярности (MIN)',
  },
  { type: SortEnumTypes.DESC_PRICE, value: 'цена (MAX)', label: 'цене (MAX)' },
  { type: SortEnumTypes.ASC_PRICE, value: 'цена (MIN)', label: 'цене (MIN)' },
  {
    type: SortEnumTypes.ASC_ALPHABET,
    value: 'алфавит (А-Я)',
    label: 'алфавиту (А-Я)',
  },
  {
    type: SortEnumTypes.DESC_ALPHABET,
    value: 'алфавит (Я-А)',
    label: 'алфавиту (Я-А)',
  },
];
