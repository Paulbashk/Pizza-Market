import { memo } from 'react';
import { type EntityId } from '@reduxjs/toolkit';

// components
import { ProductCard } from '@/entities/product/ui/ProductCard';

// types
import type { Product } from '@/entities/product/model/types';

// assets
import * as S from './styled';

interface ProductListProps {
  ids: EntityId[];
  renderButton?: Product.RenderButton;
}

const ProductCardMemo = memo(ProductCard);

export const ProductList = ({ ids, renderButton }: ProductListProps) => (
  <S.List>
    {ids.map(id => (
      <ProductCardMemo key={id} id={id} renderButton={renderButton} />
    ))}
  </S.List>
);
