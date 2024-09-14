import { type AppState } from '@/app/_root/store';
import { makeSelectHandleState } from '@/shared/libs/selectors';
import { type Product } from './types';
import { productsAdapter } from './slice';

const all = (state: AppState) => state.products;

export const {
  selectIds: getIds,
  selectAll: getAll,
  selectEntities: getEntities,
  selectById: byId,
} = productsAdapter.getSelectors(all);

export const queryState = makeSelectHandleState<Product.MakeSelectQuery>(all);
