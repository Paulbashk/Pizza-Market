import { AppState } from '@/store';
import { makeSelectHandleState } from '@/shared/libs/selectors';
import { EntityId, createSelector } from '@reduxjs/toolkit';
import { Banners } from './types';
import { bannersAdapter } from './slice';

const all = (state: AppState) => state.banners;

export const {
  selectEntities: getEntities,
  selectIds: getIds,
  selectById: byId,
} = bannersAdapter.getSelectors(all);

export const queryState = makeSelectHandleState<Banners.MakeSelectQuery>(all);

export const getById = (id: EntityId) =>
  createSelector(getEntities, items => {
    const { image, title, desc } = items[id]!;

    return {
      image,
      title,
      desc,
    };
  });
