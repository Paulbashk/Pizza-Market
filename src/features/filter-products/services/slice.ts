import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Filter, SortEnumTypes } from './types';

const initialState: Filter.State = {
  filtered: 'ALL',
  sort: SortEnumTypes.DESC_POPULAR,
  category: 0,
};

const filterSlice = createSlice({
  name: 'filtered',
  initialState,
  reducers: {
    setSorted: (state, action: PayloadAction<SortEnumTypes>) => {
      state.sort = action.payload;
    },
    setFiltered: (state, action: PayloadAction<Filter.Filtered>) => {
      state.filtered = action.payload;
    },
    setCategory: (state, action: PayloadAction<Filter.CategoryId>) => {
      state.category = action.payload;
    },
  },
});

export const { actions, reducer } = filterSlice;
