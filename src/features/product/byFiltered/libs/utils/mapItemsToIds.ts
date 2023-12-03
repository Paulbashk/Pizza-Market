import { type ProductTypes } from '@/entities/product';
import { EntityId } from '@reduxjs/toolkit';

export const mapItemsToIds = (items: ProductTypes.Item[]): EntityId[] =>
  items.map(item => item.id);
