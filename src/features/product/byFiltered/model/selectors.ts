import { AppState } from '@/store';
import { EntityId, createSelector } from '@reduxjs/toolkit';
import { productModel } from '@/entities/product';
import { sortProducts } from '@/features/product/byFiltered/libs';
import { TagVariables, tagModel } from '@/entities/tag';

const all = (state: AppState) => state.filter;

export const filtered = (state: AppState) => all(state).filtered;
export const sort = (state: AppState) => all(state).sort;
export const category = (state: AppState) => all(state).category;

export const getTagIdsWithFiltered = createSelector(
  [tagModel.selects.getIds, filtered],
  (ids, filter) => ({ tagList: ids, filtered: filter }),
);

export const getProductFilterIds = createSelector(
  [productModel.selects.getAll, sort, filtered],
  (items, sorted, filter) => {
    const sortItems = sortProducts(items, sorted);

    const filterItems = sortItems.filter(item =>
      filter !== TagVariables.ALL ? item.tag === filter : item,
    );

    const ItemsIds: EntityId[] = filterItems.map(item => item.id);

    return ItemsIds;
  },
);

export const getTagByFilter = createSelector(
  [tagModel.selects.getEntities, filtered],
  (items, filter) =>
    filter !== TagVariables.ALL ? items[filter]! : { name: 'Все' },
);
