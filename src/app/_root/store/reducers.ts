import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

// models
import { productFilterModel } from '@/features/product/byFiltered';
import { productModel } from '@/entities/product';
import { tagModel } from '@/entities/tag';
import { productBasketModel } from '@/entities/product-basket';
import { storage } from './storage';

const rootReducer = combineReducers({
  products: productModel.reducer,
  tags: tagModel.reducer,
  filter: productFilterModel.reducer,
  basket: productBasketModel.reducer,
});

const rootPersistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
