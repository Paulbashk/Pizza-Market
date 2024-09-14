'use client';

import { memo } from 'react';

// entities product basket
import {
  ProductBasketTypes,
  productBasketHooks,
  ProductBasketCard,
} from '@/entities/product-basket';

// assets
import * as S from './styled';

const { useBasketProductIds } = productBasketHooks;

interface IProductBasketListProps {
  navigation?: ProductBasketTypes.Navigation;
}

const ProductBasketCardMemo = memo(ProductBasketCard);

export const ProductBasketList = ({
  navigation = {},
}: IProductBasketListProps) => {
  const { ids, sale } = useBasketProductIds();

  return (
    <S.List>
      {ids.map(id => (
        <ProductBasketCardMemo
          sale={sale}
          key={id}
          id={id}
          navigation={navigation}
        />
      ))}
    </S.List>
  );
};
