import type { ProductTypes } from '@/entities/product';
import { EntityId } from '@reduxjs/toolkit';

export namespace Basket {
  export type ProductId = EntityId;

  export type State = {
    price: {
      count: number;
    };
    items: Product[];
  };

  export type Product = {
    readonly id: ProductId;
    total: number;
    options?: ProductTypes.TransformOption;
  };

  export type ProductSelect = {
    total: number;
    options?: ProductTypes.TransformOption;
  };

  export type PayloadActionAddBasket = {
    id: ProductId;
    total: number;
    options?: ProductTypes.TransformOption;
  };
}
