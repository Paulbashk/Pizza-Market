import { useSelector } from 'react-redux';
import { selects } from '@/features/product/addBasket/model';
import { type EntityId } from '@reduxjs/toolkit';

const { getQuantityByProductId } = selects;

export const useQuantityByProductId = (productId: EntityId): number =>
  useSelector(getQuantityByProductId(productId));
