'use client';

import { memo } from 'react';

// components
// eslint-disable-next-line max-len
import { ProductBasketCard } from '@/entities/product-basket/ui/ProductBasketCard';

// hooks
import { useBasketProductIds } from '@/entities/product-basket/libs/hooks';

// types
import { ProductBasket } from '@/entities/product-basket/model/types';

// assets
import * as S from './styled';

interface ProductListProps {
  navigation?: ProductBasket.Navigation;
}

const ProductBasketCardMemo = memo(ProductBasketCard);

export const ProductBasketList = ({ navigation = {} }: ProductListProps) => {
  const ids = useBasketProductIds();

  return (
    <S.List>
      {ids.map(id => (
        <ProductBasketCardMemo key={id} id={id} navigation={navigation} />
      ))}
    </S.List>
  );
};
