import { type EntityId } from '@reduxjs/toolkit';
import { type ReactElement } from 'react';
import type {
  IProductBasket,
  IPriceBasket,
  TPricePromocode,
  TPriceSale,
} from '@/shared/types/interfaces';
import type { ProductTypes } from '../@x/product';

export namespace ProductBasket {
  export type Sale = TPriceSale;
  export type Promocode = TPricePromocode;

  export type State = {
    price: IPriceBasket;
  };

  export interface Product extends IProductBasket {
    [key: string]: any;
  }

  export type RenderButtonDelete = (id: EntityId) => ReactElement;

  export type RenderButtonAdd = (id: EntityId) => ReactElement;

  export type RenderButtonReduce = (id: EntityId) => ReactElement;

  export type PayloadSetPromocode = {
    sale: Sale;
    promocode: Promocode;
  };

  export interface Navigation {
    buttonAdd?: RenderButtonAdd;
    buttonReduce?: RenderButtonReduce;
    buttonDelete?: RenderButtonDelete;
  }

  export type PayloadAddBasket = {
    productId: EntityId;
    total: number;
    title: string;
    image: string;
    options?: ProductTypes.TransformOption;
  };

  export type PayloadDeleteBasket = EntityId;

  export type PayloadAddQuantity = EntityId;

  export type PayloadReduceQuantity = EntityId;
}
