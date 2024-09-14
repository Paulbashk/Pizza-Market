import { type MouseEvent } from 'react';
import { type EntityId } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/shared/libs/hooks';
import { productBasketModel } from '@/entities/product-basket';

type TUseAddQuantity = (id: EntityId) => {
  handleAddQuantity: (event: MouseEvent<HTMLElement>) => void;
};

const { actions } = productBasketModel;

export const useAddQuantity: TUseAddQuantity = id => {
  const dispatch = useAppDispatch();

  const handleAddQuantity = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(actions.addQuantityProduct(id));
  };

  return {
    handleAddQuantity,
  };
};
