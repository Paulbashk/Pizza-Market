// components
import { productUI } from '@/entities/product';

// types
import type { Basket } from '@/features/product/addBasket/model/types';

// hooks
import { useAddBasket } from '@/features/product/addBasket/libs/hooks';

const { ProductCardButton } = productUI;

interface ButtonAddBasketProps {
  id: Basket.ProductId;
  product: Basket.ProductSelect;
}

export const ButtonAddBasket = ({ id, product }: ButtonAddBasketProps) => {
  const { quantity, clickAddBasket } = useAddBasket({ id, product });

  return <ProductCardButton quantity={quantity} onClick={clickAddBasket} />;
};
