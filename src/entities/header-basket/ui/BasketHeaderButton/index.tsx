'use client';

import { memo } from 'react';

// libs
import { formatCount } from '@/shared/libs/utils';

// @entities: product-basket
import { productBasketHooks } from '../../@x/product-basket';

// assets
import * as S from './styled';

const TitleMemo = memo(S.Title);

const { useTotalPrice } = productBasketHooks;

export const BasketHeaderButton = () => {
  const price = useTotalPrice();
  const formatedCount = formatCount(price);

  return (
    <S.BasketLink href="/cart" scroll={false}>
      <TitleMemo>Корзина</TitleMemo>
      <S.Price>{formatedCount}</S.Price>
    </S.BasketLink>
  );
};
