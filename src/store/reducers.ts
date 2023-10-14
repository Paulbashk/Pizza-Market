import { combineReducers } from '@reduxjs/toolkit';
import { productFilterModel } from '@/features/product/byFiltered';
import { productModel } from '@/entities/product';
import { tagModel } from '@/entities/tag';

const rootReducer = combineReducers({
  products: productModel.reducer,
  tags: tagModel.reducer,
  filter: productFilterModel.reducer,
});

export default rootReducer;
