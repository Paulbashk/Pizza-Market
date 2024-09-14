import { type ComponentPropsWithoutRef } from 'react';

// assets
import * as S from './styled';

interface IProductTotalPriceProps extends ComponentPropsWithoutRef<'span'> {
  count: number;
  isSalePrice: boolean;
}

export const ProductTotalPrice = ({
  count,
  isSalePrice,
  ...props
}: IProductTotalPriceProps) => (
  <S.TotalPrice $isSalePrice={isSalePrice} {...props}>
    {count} ₽
  </S.TotalPrice>
);
