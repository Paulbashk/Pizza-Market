import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Basket } from './types';

const initialState: Basket.State = {
  price: {
    count: 0,
  },
  items: [],
};
// ITEMS: [Product { quantity, price, options: [option] }]

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<Basket.PayloadActionAddBasket>,
    ) => {
      const { id, total, options } = action.payload;

      state.price.count += total;
      state.items = [
        ...state.items,
        {
          id,
          total,
          options,
        },
      ];
    },
    // removeProduct
  },
});

export const { actions, reducer } = basketSlice;
