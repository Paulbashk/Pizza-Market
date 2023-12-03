import { AppState } from '@/app/_root/store';
import { EntityId, createSelector } from '@reduxjs/toolkit';
import { productModel } from '@/entities/product';
import {
  sortProducts,
  mapItemsToIds,
  filterProductsByTag,
} from '@/features/product/byFiltered/libs/utils';
import { TagVariables, tagModel } from '@/entities/tag';

const all = (state: AppState) => state.filter;

export const filtered = (state: AppState) => all(state).filtered;
export const sort = (state: AppState) => all(state).sort;

export const getProductIdsByFilter = createSelector(
  [productModel.selects.getAll, sort, filtered],
  (items, sorted, filter) => {
    const sortItems = sortProducts(items, sorted);

    const filterItems = filterProductsByTag(sortItems, filter);

    const ItemsIds: EntityId[] = mapItemsToIds(filterItems);

    return ItemsIds;
  },
);

export const getTagByFilter = createSelector(
  [tagModel.selects.getEntities, filtered],
  (items, filter) =>
    filter !== TagVariables.ALL ? items[filter] : { name: 'Все' },
);
