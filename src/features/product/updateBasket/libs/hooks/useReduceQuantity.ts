import { type EntityId } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/shared/libs/hooks';
import { productBasketModel } from '@/entities/product-basket';
import { type MouseEvent } from 'react';

type ReduceQuantityParam = (id: EntityId) => {
  handleReduceQuantity: (event: MouseEvent<HTMLElement>) => void;
};

const { actions } = productBasketModel;

export const useReduceQuantity: ReduceQuantityParam = id => {
  const dispatch = useAppDispatch();

  const handleReduceQuantity = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(actions.reduceQuantityProduct(id));
  };

  return {
    handleReduceQuantity,
  };
};
