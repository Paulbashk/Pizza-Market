import { EntityId, createSelector } from '@reduxjs/toolkit';
import { type AppState } from '@/app/_root/store';
import { productBasketModel } from '@/entities/product-basket';
import { arrayObjectFilterByKey, reduceSumByKey } from '@/shared/libs/utils';

const all = (state: AppState) => state.basket;

export const getHeaderInfo = createSelector([all], state => ({
  price: state.price.count,
  isProducts: state.ids.length > 0,
}));

export const getQuantityByProductId = (productId: EntityId) =>
  createSelector([productBasketModel.selects.getAll], items => {
    const filteredItems = arrayObjectFilterByKey(items, 'productId', productId);

    return filteredItems.length > 0
      ? reduceSumByKey(filteredItems, 'quantity')
      : 0;
  });
