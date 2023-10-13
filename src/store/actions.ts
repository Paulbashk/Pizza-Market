import { productsFilterSlice } from '@/features/filter-products';
import { productSlice, productAsyncActions } from '@/entities/product';
import { tagSlice, tagAsyncActions } from '@/entities/tag';

export const asyncActions = {
  ...productAsyncActions,
  ...tagAsyncActions,
};

export type AsyncActionNames = keyof typeof asyncActions;
export type AsyncActionArgs = Parameters<
  (typeof asyncActions)[AsyncActionNames]
>[0];

export default {
  ...productsFilterSlice,
  ...productSlice,
  ...tagSlice,
} as const;
