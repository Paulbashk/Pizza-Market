import { type AppState } from '@/app/_root/store';
import { type EntityId, createSelector } from '@reduxjs/toolkit';
import { arrayObjectFilterByKey, reduceSumByKey } from '@/shared/libs/utils';
import { productsBasketAdapter } from './slice';

const all = (state: AppState) => state.basket;

export const getPrice = (state: AppState) => all(state).price;

export const totalPrice = (state: AppState) => getPrice(state).count;

export const sale = (state: AppState) => getPrice(state).sale;

export const {
  selectIds: getIds,
  selectAll: getAll,
  selectEntities: getEntities,
  selectById: byId,
  selectTotal,
} = productsBasketAdapter.getSelectors(all);

export const isEmptyBasket = (state: AppState) => selectTotal(state) <= 0;

export const getAllData = createSelector(
  [getAll, getPrice],
  (items, price) => ({
    items,
    price,
    countItems: reduceSumByKey(items, 'quantity'),
  }),
);

export const getIdsWithSale = createSelector([getIds, sale], (ids, _sale) => ({
  ids: [...ids].reverse(),
  sale: _sale,
}));

export const getQuantityByProductId = (productId: EntityId) =>
  createSelector([getAll], items => {
    const filteredItems = arrayObjectFilterByKey(items, 'productId', productId);

    return filteredItems.length > 0
      ? reduceSumByKey(filteredItems, 'quantity')
      : 0;
  });
