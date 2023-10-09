import { reducerBanners } from '@/entities/banners/services/banners';
import { reducerFilter } from '@/entities/products/services/filter';
import { reducerProducts } from '@/entities/products/services/products';
import { reducerTags } from '@/entities/products/services/tags';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  products: reducerProducts,
  tags: reducerTags,
  banners: reducerBanners,
  filter: reducerFilter,
});

export default rootReducer;
