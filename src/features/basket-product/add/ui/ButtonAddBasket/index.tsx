// components
import { ButtonColors } from '@/shared/ui';

// types
import type { ProductTypes } from '@/entities/product';

// hooks
import { useAddBasket } from '../../libs/hooks';

// assets
import * as S from './styled';

interface IButtonAddBasketProps {
  product: ProductTypes.RenderButtonProps;
}

export const ButtonAddBasket = ({ product }: IButtonAddBasketProps) => {
  const { quantity, handleAddBasket } = useAddBasket(product);

  return (
    <S.Button
      color={ButtonColors.transparent}
      isActive={false}
      onClick={handleAddBasket}
    >
      в корзину
      {quantity > 0 && <span>{quantity}</span>}
    </S.Button>
  );
};
