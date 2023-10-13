import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { Tag } from './types';
import { fetchTags } from './async-actions';

export const tagsAdapter = createEntityAdapter<Tag.Item>();

const initialState = tagsAdapter.getInitialState<Tag.State>({
  isLoading: true,
  isError: false,
  error: undefined,
});

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTags.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        tagsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { actions, reducer } = tagSlice;
