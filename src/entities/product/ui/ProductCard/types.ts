import { EntityId } from '@reduxjs/toolkit';
import { type Product as typeProduct } from '@/entities/product/model/types';
import { ReactElement } from 'react';

export type ProductCardRenderButton = (
  id: EntityId,
  product: ProductCardState,
) => ReactElement;

export interface ProductCardProps {
  id: EntityId;
  renderButton?: ProductCardRenderButton;
}

export interface ProductCardState {
  total: number;
  options?: typeProduct.TransformOption;
}
