import { createSelector } from '@reduxjs/toolkit';
import { makeSelectHandleState } from '@/shared/libs/selectors';
import { type AppState } from '@/store';
import { tagsAdapter } from './slice';

import { type Tag, TagVariables } from './types';

const all = (state: AppState) => state.tags;

export const {
  selectIds: getIds,
  selectEntities: getEntities,
  selectAll: getAll,
} = tagsAdapter.getSelectors(all);

export const queryState = makeSelectHandleState<Tag.MakeSelectQuery>(all);

export const getById = (id: Tag.Variable) =>
  createSelector(getEntities, items =>
    id === TagVariables.ALL ? { name: 'Все' } : items[id]!,
  );
