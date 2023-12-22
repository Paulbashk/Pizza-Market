import { type MouseEvent } from 'react';
import { useAppDispatch } from '@/shared/libs/hooks';
import { productBasketModel } from '@/entities/product-basket';
import type { ProductTypes } from '@/entities/product';
import { useQuantityByProductId } from './useQuantityByProductId';

type AddBasketParam = (product: ProductTypes.RenderButtonProps) => {
  quantity: number;
  handleAddBasket: (event: MouseEvent<HTMLElement>) => void;
};

const { actions } = productBasketModel;

export const useAddBasket: AddBasketParam = ({ id, price, title, image }) => {
  const dispatch = useAppDispatch();

  const quantity = useQuantityByProductId(id);

  const objAddBasket = {
    productId: id,
    total: price.total,
    title,
    image,
    options: price.options,
  };

  const handleAddBasket = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(actions.addProduct(objAddBasket));
  };

  return { quantity, handleAddBasket };
};
