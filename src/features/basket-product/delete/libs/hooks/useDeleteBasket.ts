import { type MouseEvent } from 'react';
import { type EntityId } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/shared/libs/hooks';
import { productBasketModel } from '@/entities/product-basket';

type TUseDeleteBasket = (id: EntityId) => {
  handleDeleteBasket: (event: MouseEvent<HTMLElement>) => void;
};

export const useDeleteBasket: TUseDeleteBasket = id => {
  const dispatch = useAppDispatch();

  const handleDeleteBasket = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(productBasketModel.actions.deleteProduct(id));
  };

  return {
    handleDeleteBasket,
  };
};
