import { type EntityId } from '@reduxjs/toolkit';
import type { ITransformOption } from './IProduct';

export interface IProductBasket {
  readonly id: EntityId;
  productId: EntityId;
  title: string;
  image: string;
  total: number;
  totalQuantity: number;
  quantity: number;
  options?: ITransformOption;
}
