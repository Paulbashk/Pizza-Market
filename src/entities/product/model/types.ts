import type { ReactElement } from 'react';
import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { TQueryState } from '@/shared/types';
import type {
  IProduct,
  IProductOption,
  IProductOptions,
  ITransformOption,
  TPriceSale,
} from '@/shared/types/interfaces';

export namespace Product {
  export type State = TQueryState;

  export type MakeSelectQuery = EntityState<Item>;

  export interface Item extends IProduct {}
  export interface Options extends IProductOptions {}
  export interface Option extends IProductOption {}
  export type TransformOption = ITransformOption;

  export interface PriceTotal {
    count: number;
    saleCount: number;
  }

  export interface Price {
    total: PriceTotal;
    options?: TransformOption;
  }

  export interface RenderButtonProps {
    id: EntityId;
    title: string;
    image: string;
    price: Price;
  }

  export type Sale = TPriceSale;

  export type RenderButton = (product: RenderButtonProps) => ReactElement;
}
