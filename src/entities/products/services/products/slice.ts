import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { type Products } from './types';
import { fetchProducts } from './async-actions';

export const productsAdapter = createEntityAdapter<Products.Item>();

const initialState = productsAdapter.getInitialState<Products.State>({
  isLoading: true,
  isError: false,
  error: undefined,
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { actions: actionsProducts, reducer: reducerProducts } =
  productsSlice;
