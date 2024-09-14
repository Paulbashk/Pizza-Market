import { useSelector } from 'react-redux';
import { type EntityId } from '@reduxjs/toolkit';
import { getQuantityByProductId } from '../../model/selectors';

export const useQuantityByProductId = (productId: EntityId): number =>
  useSelector(getQuantityByProductId(productId));
