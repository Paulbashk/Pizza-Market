import { memo } from 'react';
import { EntityId } from '@reduxjs/toolkit';

// components
import {
  ProductCard,
  type ProductCardRenderButton,
} from '@/entities/product/ui/ProductCard';

// assets
import * as S from './styled';

interface ProductListProps {
  ids: EntityId[];
  renderButton?: ProductCardRenderButton;
}

const ProductCardMemo = memo(ProductCard);

export const ProductList = ({ ids, renderButton }: ProductListProps) => (
  <S.List>
    {ids.map(id => (
      <ProductCardMemo key={id} id={id} renderButton={renderButton} />
    ))}
  </S.List>
);
