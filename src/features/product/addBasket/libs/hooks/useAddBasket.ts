import { type MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/libs/hooks';
import type { Basket } from '@/features/product/addBasket/model/types';
import { selects, actions } from '@/features/product/addBasket/model';

type AddBasketParam = {
  id: Basket.ProductId;
  product: Basket.ProductSelect;
};

export const useAddBasket = ({ id, product }: AddBasketParam) => {
  const dispatch = useAppDispatch();
  const quantity = useSelector(selects.getItemQuantityById(id));

  const clickAddBasket = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(actions.addProduct({ id, ...product }));
  };

  return { quantity, clickAddBasket };
};
