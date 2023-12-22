import {
  type PayloadAction,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { uniqueID } from '@/shared/libs/utils';
import {
  findByProductId,
  findById,
} from '@/entities/product-basket/libs/utils';
import type { ProductBasket } from './types';

export const productsBasketAdapter =
  createEntityAdapter<ProductBasket.Product>();

const initialState = productsBasketAdapter.getInitialState<ProductBasket.State>(
  {
    price: {
      count: 0,
    },
  },
);

const productBasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<ProductBasket.PayloadAddBasket>,
    ) => {
      const { productId, total, options, title, image } = action.payload;

      state.price.count += total;

      const { entities } = state;

      const existingProduct = findByProductId(
        Object.values(entities),
        productId,
        options,
      );

      if (existingProduct) {
        const { id, quantity, totalQuantity } = existingProduct;

        productsBasketAdapter.updateOne(state, {
          id,
          changes: {
            quantity: quantity + 1,
            totalQuantity: totalQuantity + total,
          },
        });
      } else {
        productsBasketAdapter.addOne(state, {
          id: uniqueID(),
          productId,
          title,
          image,
          total,
          totalQuantity: total,
          options,
          quantity: 1,
        });
      }
    },
    deleteProduct: (
      state,
      action: PayloadAction<ProductBasket.PayloadDeleteBasket>,
    ) => {
      const { entities } = state;

      const existingProduct = findById(Object.values(entities), action.payload);

      if (existingProduct) {
        const { totalQuantity } = existingProduct;

        state.price.count -= totalQuantity;

        productsBasketAdapter.removeOne(state, action.payload);
      }
    },
    addQuantityProduct: (
      state,
      action: PayloadAction<ProductBasket.PayloadAddQuantity>,
    ) => {
      const { entities } = state;

      const existingProduct = findById(Object.values(entities), action.payload);

      if (existingProduct) {
        const { total, quantity, totalQuantity } = existingProduct;

        state.price.count += total;

        productsBasketAdapter.updateOne(state, {
          id: action.payload,
          changes: {
            quantity: quantity + 1,
            totalQuantity: totalQuantity + total,
          },
        });
      }
    },
    reduceQuantityProduct: (
      state,
      action: PayloadAction<ProductBasket.PayloadReduceQuantity>,
    ) => {
      const { entities } = state;

      const existingProduct = findById(Object.values(entities), action.payload);

      if (existingProduct) {
        const { total, quantity, totalQuantity } = existingProduct;

        const reduceQuantity = quantity - 1;

        state.price.count -= total;

        // delete
        if (reduceQuantity === 0) {
          productsBasketAdapter.removeOne(state, action.payload);

          return;
        }

        productsBasketAdapter.updateOne(state, {
          id: action.payload,
          changes: {
            quantity: reduceQuantity,
            totalQuantity: totalQuantity - total,
          },
        });
      }
    },
  },
});

export const { actions, reducer } = productBasketSlice;
