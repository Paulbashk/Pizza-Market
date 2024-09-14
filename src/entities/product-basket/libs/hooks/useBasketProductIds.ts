import { useSelector } from 'react-redux';
import { type EntityId } from '@reduxjs/toolkit';
import { getIdsWithSale } from '../../model/selectors';
import { type ProductBasket } from '../../model/types';

type TUseBasketProductIds = () => {
  ids: EntityId[];
  sale: ProductBasket.Sale;
};

export const useBasketProductIds: TUseBasketProductIds = () =>
  useSelector(getIdsWithSale);
