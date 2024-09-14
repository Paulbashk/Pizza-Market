import { makeSelectHandleState } from '@/shared/libs/selectors';
import { type AppState } from '@/app/_root/store';
import { createSelector } from '@reduxjs/toolkit';
import { tagsAdapter } from './slice';
import { type Tag, TagVariables } from './types';

const all = (state: AppState) => state.tags;

export const {
  selectIds: getIds,
  selectEntities: getEntities,
  selectAll: getAll,
  selectById: byId,
  selectTotal,
} = tagsAdapter.getSelectors(all);

export const queryState = makeSelectHandleState<Tag.MakeSelectQuery>(all);

export const getIdsWithAll = createSelector(getIds, ids =>
  ids.length !== 0 ? [TagVariables.ALL, ...ids] : [],
);
