import { AppState } from '@/app/_root/store';
import { EntityId, createSelector } from '@reduxjs/toolkit';
import { productModel } from '@/entities/product';
import { TagVariables, tagModel } from '@/entities/tag';
import { productBasketModel } from '@/entities/product-basket';
import {
  sortProducts,
  mapItemsToIds,
  filterProductsByTag,
} from '../libs/utils';

const basketSale = productBasketModel.selects.sale;

const all = (state: AppState) => state.filter;

export const filtered = (state: AppState) => all(state).filtered;
export const sort = (state: AppState) => all(state).sort;

export const getProductIdsByFilter = createSelector(
  [productModel.selects.getAll, sort, filtered, basketSale],
  (items, sorted, filter, sale) => {
    const sortItems = sortProducts(items, sorted);

    const filterItems = filterProductsByTag(sortItems, filter);

    const ItemsIds: EntityId[] = mapItemsToIds(filterItems);

    return { ids: ItemsIds, sale };
  },
);

export const getTagByFilter = createSelector(
  [tagModel.selects.getEntities, filtered],
  (items, filter) =>
    filter !== TagVariables.ALL ? items[filter] : { name: 'Все' },
);
