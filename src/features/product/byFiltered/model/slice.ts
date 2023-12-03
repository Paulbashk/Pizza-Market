import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Filter, SortEnumTypes } from './types';

const initialState: Filter.State = {
  filtered: 'ALL',
  sort: SortEnumTypes.DESC_POPULAR,
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
    resetState: () => initialState,
  },
});

export const { actions, reducer } = filterSlice;
