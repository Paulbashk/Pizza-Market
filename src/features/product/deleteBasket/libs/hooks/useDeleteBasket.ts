import { type EntityId } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/shared/libs/hooks';
import { productBasketModel } from '@/entities/product-basket';
import { type MouseEvent } from 'react';

type DeleteBasketParam = (id: EntityId) => {
  handleDeleteBasket: (event: MouseEvent<HTMLElement>) => void;
};

const { actions } = productBasketModel;

export const useDeleteBasket: DeleteBasketParam = id => {
  const dispatch = useAppDispatch();

  const handleDeleteBasket = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(actions.deleteProduct(id));
  };

  return {
    handleDeleteBasket,
  };
};
