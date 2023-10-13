import { combineReducers } from '@reduxjs/toolkit';
import { productsFilterSlice } from '@/features/filter-products';
import { productSlice } from '@/entities/product';
import { tagSlice } from '@/entities/tag';

const rootReducer = combineReducers({
  products: productSlice.reducer,
  tags: tagSlice.reducer,
  filter: productsFilterSlice.reducer,
});

export default rootReducer;
