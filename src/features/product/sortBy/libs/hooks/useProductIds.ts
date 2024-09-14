import { useSelector } from 'react-redux';
import { type EntityId } from '@reduxjs/toolkit';
import type { ProductTypes } from '@/entities/product/';
import { getProductIdsByFilter } from '../../model/selectors';

type TUseProductIds = () => {
  ids: EntityId[];
  sale: ProductTypes.Sale;
};

export const useProductIds: TUseProductIds = () =>
  useSelector(getProductIdsByFilter);
