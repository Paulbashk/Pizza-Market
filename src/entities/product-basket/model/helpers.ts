import { calcPriceWithSale } from '../libs/utils';
import { type ProductBasket } from './types';

type TAddPriceAction = {
  count: number;
};

export const actionAddPrice = (
  state: ProductBasket.State,
  action: TAddPriceAction,
) => {
  const { count } = action;
  const { sale } = state.price;

  if (sale) {
    state.price.count += calcPriceWithSale(count, sale);
    state.price.oldCount += count;
  } else {
    state.price.count += count;
  }
};

type TReducePriceAction = {
  count: number;
};

export const actionReducePrice = (
  state: ProductBasket.State,
  action: TReducePriceAction,
) => {
  const { count } = action;
  const { sale, oldCount, promocode } = state.price;

  if (sale) {
    const resultReduceOldCount = oldCount - count;

    state.price.count -= calcPriceWithSale(count, sale);
    state.price.oldCount -= count;

    if (promocode) {
      const { block_price: blockPrice } = promocode;

      // if block price -> deactivate sale and promocode
      if (resultReduceOldCount < blockPrice) {
        state.price.sale = null;
        state.price.promocode = null;

        state.price.count = resultReduceOldCount;
        state.price.oldCount = 0;
      }
    }
  } else {
    state.price.count -= count;
  }
};
