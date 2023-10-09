import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Filter, SortEnumTypes, FilteredEnumLocalTypes } from './types';

const initialState: Filter.State = {
  filtered: FilteredEnumLocalTypes.ALL,
  sort: SortEnumTypes.DESC_POPULAR,
  category: undefined,
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

export const { actions: actionsFilter, reducer: reducerFilter } = filterSlice;
