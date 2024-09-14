import type { IPromocode } from './IPromocode';

export interface IPriceBasket {
  count: number;
  oldCount: number;
  sale: TPriceSale;
  promocode: TPricePromocode;
}

export type TPriceSale = number | null;
export type TPricePromocode = IPromocode | null;
