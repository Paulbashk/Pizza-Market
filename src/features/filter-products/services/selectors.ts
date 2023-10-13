import { AppState } from '@/store';
import { EntityId, createSelector } from '@reduxjs/toolkit';
import { productSelect } from '@/entities/product';
import { sortProducts } from '@/features/filter-products/utils';
import { TagVariables, tagSelect } from '@/entities/tag';

const all = (state: AppState) => state.filter;

export const filtered = (state: AppState) => all(state).filtered;
export const sort = (state: AppState) => all(state).sort;
export const category = (state: AppState) => all(state).category;

export const getTagIdsWithFiltered = createSelector(
  [tagSelect.getIds, filtered],
  (ids, filter) => ({ tagList: ids, filtered: filter }),
);

export const getProductFilterIds = createSelector(
  [productSelect.getAll, sort, filtered],
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
  [tagSelect.getEntities, filtered],
  (items, filter) =>
    filter !== TagVariables.ALL ? items[filter] : { name: 'Все' },
);
