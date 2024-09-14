import { type MouseEvent } from 'react';
import { useAppDispatch } from '@/shared/libs/hooks';
import {
  productBasketModel,
  productBasketHooks,
} from '@/entities/product-basket';
import type { ProductTypes } from '@/entities/product';

type TUseAddBasket = (product: ProductTypes.RenderButtonProps) => {
  quantity: number;
  handleAddBasket: (event: MouseEvent<HTMLElement>) => void;
};

const { useQuantityByProductId } = productBasketHooks;

export const useAddBasket: TUseAddBasket = ({ id, price, title, image }) => {
  const dispatch = useAppDispatch();

  const quantity = useQuantityByProductId(id);

  const objAddBasket = {
    productId: id,
    total: price.total.count,
    title,
    image,
    options: price.options,
  };

  const handleAddBasket = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(productBasketModel.actions.addProduct(objAddBasket));
  };

  return { quantity, handleAddBasket };
};
