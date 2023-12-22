import { type EntityId } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/shared/libs/hooks';
import { productBasketModel } from '@/entities/product-basket';
import { type MouseEvent } from 'react';

type AddQuantityParam = (id: EntityId) => {
  handleAddQuantity: (event: MouseEvent<HTMLElement>) => void;
};

const { actions } = productBasketModel;

export const useAddQuantity: AddQuantityParam = id => {
  const dispatch = useAppDispatch();

  const handleAddQuantity = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(actions.addQuantityProduct(id));
  };

  return {
    handleAddQuantity,
  };
};
