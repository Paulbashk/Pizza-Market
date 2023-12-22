import { type Draft, type EntityId } from '@reduxjs/toolkit';
import { type ProductBasket } from '@/entities/product-basket/model/types';

export const findById = (
  entities: (Draft<ProductBasket.Product> | undefined)[],
  id: EntityId,
): Draft<ProductBasket.Product> | undefined =>
  entities.find(product => product && product.id === id);
