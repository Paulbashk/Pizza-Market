import { createSelector } from '@reduxjs/toolkit';
import {
  type Filter,
  filterSelect,
  FilteredEnumLocalTypes,
} from '@/entities/products/services/filter';
import { makeSelectHandleState } from '@/shared/libs/selectors';
import { type AppState } from '@/store';
import { tagsAdapter } from './slice';

import { type Tags } from './types';

const all = (state: AppState) => state.tags;

const { filtered } = filterSelect;

export const {
  selectIds: getIds,
  selectEntities: getEntities,
  selectAll: getAll,
} = tagsAdapter.getSelectors(all);

export const queryState = makeSelectHandleState<Tags.MakeSelectQuery>(all);

export const getIdsWithFiltered = createSelector(
  [getIds, filtered],
  (ids, filter) => ({ tagList: ids, filtered: filter }),
);

export const getById = (id: Filter.Filtered) =>
  createSelector(getEntities, items =>
    id !== FilteredEnumLocalTypes.ALL ? items[id] : undefined,
  );

export const getByIdFilter = createSelector(
  [getEntities, filtered],
  (items, filter) =>
    filter !== FilteredEnumLocalTypes.ALL ? items[filter] : undefined,
);
