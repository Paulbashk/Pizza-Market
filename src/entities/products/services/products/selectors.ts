import { type AppState } from '@/store';
import { EntityId, createSelector } from '@reduxjs/toolkit';
import { makeSelectHandleState } from '@/shared/libs/selectors';
import {
  calcSumOptions,
  sortProducts,
  transformOptions,
} from '@/entities/products/utils';
import { filterSelect } from '@/entities/products/services/filter';
import { productsAdapter } from './slice';
import { type Products } from './types';

const all = (state: AppState) => state.products;

const { filtered, sort: sorted } = filterSelect;

export const {
  selectIds: getIds,
  selectAll: getAll,
  selectEntities: getEntities,
  selectById: byId,
} = productsAdapter.getSelectors(all);

export const queryState = makeSelectHandleState<Products.MakeSelectQuery>(all);

export const getFilteredIds = createSelector(
  [getAll, sorted, filtered],
  (items, sort, filter) => {
    const sortItems = sortProducts(items, sort);

    const filterItems = sortItems.filter(item =>
      filter !== 'ALL' ? item.tag === filter : item,
    );

    const ItemsIds: EntityId[] = filterItems.map(item => item.id);

    return ItemsIds;
  },
);

export const getById = (id: EntityId) =>
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
