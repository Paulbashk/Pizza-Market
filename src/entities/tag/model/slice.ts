import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { Tag } from './types';
import { getTagsThunk } from './async-actions';

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
      .addCase(getTagsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTagsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        tagsAdapter.setAll(state, action.payload);
      })
      .addCase(getTagsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { reducer, actions } = tagSlice;
