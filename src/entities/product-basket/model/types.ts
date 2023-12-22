import type { EntityId } from '@reduxjs/toolkit';
import type { ProductTypes } from '@/entities/product-basket/@x/product';
import { ReactElement } from 'react';

export namespace ProductBasket {
  export type State = {
    price: {
      count: number;
    };
  };

  export type Product = {
    readonly id: EntityId;
    productId: EntityId;
    title: string;
    image: string;
    total: number;
    totalQuantity: number;
    quantity: number;
    options?: ProductTypes.TransformOption;
  };

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

  export type RenderButtonDelete = (id: EntityId) => ReactElement;

  export type RenderButtonAdd = (id: EntityId) => ReactElement;

  export type RenderButtonReduce = (id: EntityId) => ReactElement;

  export interface Navigation {
    buttonAdd?: RenderButtonAdd;
    buttonReduce?: RenderButtonReduce;
    buttonDelete?: RenderButtonDelete;
  }
}
