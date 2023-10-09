import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchBanners } from './async-actions';
import { type Banners } from './types';

export const bannersAdapter = createEntityAdapter<Banners.Item>();

const initialState = bannersAdapter.getInitialState<Banners.State>({
  isLoading: true,
  isError: false,
  error: undefined,
});

const bannerSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBanners.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        bannersAdapter.setAll(state, action.payload);
        state.isLoading = false;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { actions: actionsBanners, reducer: reducerBanners } = bannerSlice;
