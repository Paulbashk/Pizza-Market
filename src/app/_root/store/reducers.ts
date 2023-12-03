import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

// models
import { productFilterModel } from '@/features/product/byFiltered';
import { productModel } from '@/entities/product';
import { tagModel } from '@/entities/tag';
import { basketModel } from '@/features/product/addBasket';
import { storage } from './storage';

const rootReducer = combineReducers({
  products: productModel.reducer,
  tags: tagModel.reducer,
  filter: productFilterModel.reducer,
  basket: basketModel.reducer,
});

const rootPersistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
