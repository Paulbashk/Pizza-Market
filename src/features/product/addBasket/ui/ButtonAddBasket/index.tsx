// components
import { productUI } from '@/entities/product';

// hooks
import { useAddBasket } from '@/features/product/addBasket/libs/hooks';

// types
import type { ProductTypes } from '@/entities/product';

const { ProductCardButton } = productUI;

interface ButtonAddBasketProps {
  product: ProductTypes.RenderButtonProps;
}

export const ButtonAddBasket = ({ product }: ButtonAddBasketProps) => {
  const { quantity, handleAddBasket } = useAddBasket(product);

  return <ProductCardButton quantity={quantity} onClick={handleAddBasket} />;
};
