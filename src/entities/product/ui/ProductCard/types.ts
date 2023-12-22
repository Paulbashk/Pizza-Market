import { type EntityId } from '@reduxjs/toolkit';
import type { Product } from '@/entities/product/model/types';

export interface ProductCardProps {
  id: EntityId;
  renderButton?: Product.RenderButton;
}

export interface ProductCardState extends Product.Price {}
