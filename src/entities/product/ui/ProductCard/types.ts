import { type EntityId } from '@reduxjs/toolkit';
import type { Product } from '../../model/types';

export interface IProductCardProps {
  id: EntityId;
  sale: Product.Sale;
  renderButton?: Product.RenderButton;
}

export interface IProductCardState extends Product.Price {}
