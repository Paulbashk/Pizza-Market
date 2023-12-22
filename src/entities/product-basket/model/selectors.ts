import { type AppState } from '@/app/_root/store';
import { type EntityId, createSelector } from '@reduxjs/toolkit';
import { formatOptionsInString } from '@/entities/product-basket/libs/utils';
import { productsBasketAdapter } from './slice';

const all = (state: AppState) => state.basket;

export const {
  selectIds: getIds,
  selectAll: getAll,
  selectEntities: getEntities,
  selectById: byId,
} = productsBasketAdapter.getSelectors(all);

export const getById = (id: EntityId) =>
  createSelector(getEntities, basketItems => {
    const basketProductItem = basketItems[id]!;

    const { productId, options, totalQuantity, quantity, ...other } =
      basketProductItem;

    const descOptions = options && formatOptionsInString(options);

    return {
      descOptions,
      quantity,
      totalQuantity,
      ...other,
    };
  });
