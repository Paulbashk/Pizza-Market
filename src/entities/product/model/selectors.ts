import { type AppState } from '@/store';
import { EntityId, createSelector } from '@reduxjs/toolkit';
import { makeSelectHandleState } from '@/shared/libs/selectors';
import { productLibs } from '@/entities/product';
import { productsAdapter } from './slice';
import { type Product } from './types';

const all = (state: AppState) => state.products;

export const {
  selectIds: getIds,
  selectAll: getAll,
  selectEntities: getEntities,
  selectById: byId,
} = productsAdapter.getSelectors(all);

export const queryState = makeSelectHandleState<Product.MakeSelectQuery>(all);

export const getById = (id: EntityId) =>
  createSelector(getEntities, items => {
    const { price: defaultPrice, image, title, options } = items[id]!;

    const defaultOptions = options && productLibs.transformOptions(options);

    const sumPriceOptions =
      defaultOptions && productLibs.calcSumOptions(defaultOptions);

    const transformPrice = {
      total:
        sumPriceOptions !== undefined
          ? defaultPrice + sumPriceOptions
          : defaultPrice,
      options: defaultOptions,
    };

    return {
      price: transformPrice,
      defaultPrice,
      image,
      title,
      isOptions: options !== undefined && options?.length >= 0,
      options,
    };
  });

export const getByIdOnlyOptions = (id: EntityId) =>
  createSelector(getEntities, items => {
    const { options } = items[id]!;

    return {
      options,
      isOptions: options !== undefined && options?.length >= 0,
    };
  });
