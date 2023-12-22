import { type AppState } from '@/app/_root/store';
import { type EntityId, createSelector } from '@reduxjs/toolkit';
import { makeSelectHandleState } from '@/shared/libs/selectors';
import {
  transformOptions,
  calcSumOptions,
} from '@/entities/product/libs/utils';
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

export const getByIdWithCalc = (id: EntityId) =>
  createSelector(getEntities, items => {
    const { price: defaultPrice, image, title, options } = items[id]!;

    const defaultOptions = options && transformOptions(options);

    const sumPriceOptions = defaultOptions && calcSumOptions(defaultOptions);

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
      isOptions: options !== undefined && options.length > 0,
      options,
    };
  });

export const getByIdOnlyOptions = (id: EntityId) =>
  createSelector(getEntities, items => {
    const { options } = items[id]!;

    return {
      options,
    };
  });
