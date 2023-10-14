import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type Product } from './types';
import { getProductsThunk } from './async-actions';

export const productsAdapter = createEntityAdapter<Product.Item>();

const initialState = productsAdapter.getInitialState<Product.State>({
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
      .addCase(getProductsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { actions, reducer } = productsSlice;
