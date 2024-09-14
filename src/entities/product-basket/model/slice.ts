import {
  type PayloadAction,
  createSlice,
  createEntityAdapter,
  nanoid,
} from '@reduxjs/toolkit';
import { calcPriceWithSale, findByProductId } from '../libs/utils';
import type { ProductBasket } from './types';
import { actionAddPrice, actionReducePrice } from './helpers';

export const productsBasketAdapter =
  createEntityAdapter<ProductBasket.Product>();

const initialState = productsBasketAdapter.getInitialState<ProductBasket.State>(
  {
    price: {
      count: 0,
      oldCount: 0,
      sale: null,
      promocode: null,
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

      actionAddPrice(state, { count: total });

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
          id: nanoid(),
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
      const id = action.payload;

      const selectors = productsBasketAdapter.getSelectors();
      const existingProduct = selectors.selectById(state, id);

      if (existingProduct) {
        const { totalQuantity } = existingProduct;

        actionReducePrice(state, { count: totalQuantity });

        productsBasketAdapter.removeOne(state, id);
      }
    },
    addQuantityProduct: (
      state,
      action: PayloadAction<ProductBasket.PayloadAddQuantity>,
    ) => {
      const id = action.payload;

      const selectors = productsBasketAdapter.getSelectors();
      const existingProduct = selectors.selectById(state, id);

      if (existingProduct) {
        const { total, quantity, totalQuantity } = existingProduct;

        actionAddPrice(state, { count: total });

        productsBasketAdapter.updateOne(state, {
          id,
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
      const id = action.payload;

      const selectors = productsBasketAdapter.getSelectors();
      const existingProduct = selectors.selectById(state, id);

      if (existingProduct) {
        const { total, quantity, totalQuantity } = existingProduct;

        const reduceQuantity = quantity - 1;

        actionReducePrice(state, { count: total });

        if (reduceQuantity === 0) {
          productsBasketAdapter.removeOne(state, id);

          return;
        }

        productsBasketAdapter.updateOne(state, {
          id,
          changes: {
            quantity: reduceQuantity,
            totalQuantity: totalQuantity - total,
          },
        });
      }
    },
    setPromocode: (
      state,
      action: PayloadAction<ProductBasket.PayloadSetPromocode>,
    ) => {
      const { sale, promocode } = action.payload;
      const { count } = state.price;

      state.price.sale = sale;
      state.price.promocode = promocode;

      if (sale) {
        state.price.oldCount = count;

        state.price.count = calcPriceWithSale(count, sale);
      } else {
        state.price.count = state.price.oldCount;

        state.price.oldCount = 0;
      }
    },
    clearBasket: state => {
      productsBasketAdapter.removeAll(state);
      state.price = {
        count: 0,
        oldCount: 0,
        sale: null,
        promocode: null,
      };
    },
  },
});

export const { actions, reducer } = productBasketSlice;
