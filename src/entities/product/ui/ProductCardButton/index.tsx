import { type ComponentPropsWithoutRef } from 'react';

// components
import { ButtonColors } from '@/shared/ui';

// assets
import * as S from './styled';

interface ProductCardButtonProps extends ComponentPropsWithoutRef<'button'> {
  quantity: number;
}

export const ProductCardButton = ({
  quantity,
  color,
  ...otherProps
}: ProductCardButtonProps) => (
  <S.Button color={ButtonColors.transparent} isActive={false} {...otherProps}>
    в корзину
    {quantity > 0 && <span>{quantity}</span>}
  </S.Button>
);
