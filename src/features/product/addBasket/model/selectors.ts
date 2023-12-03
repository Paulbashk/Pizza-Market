import { AppState } from '@/app/_root/store';
import { createSelector } from '@reduxjs/toolkit';
import { Basket } from './types';

const all = (state: AppState) => state.basket;

const items = (state: AppState) => all(state).items;

export const getHeaderInfo = createSelector([all], state => ({
  price: state.price.count,
  isProducts: state.items.length > 0,
}));

export const getItemQuantityById = (id: Basket.ProductId) =>
  createSelector(
    [items],
    variables => [...variables].filter(({ id: _id }) => _id === id).length,
  );
