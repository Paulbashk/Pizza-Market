import { memo } from 'react';
import { type EntityId } from '@reduxjs/toolkit';

// entities Product
import { ProductCard, type ProductTypes } from '@/entities/product';

// assets
import * as S from './styled';

interface IProductListProps {
  ids: EntityId[];
  sale: number | null;
  renderButton?: ProductTypes.RenderButton;
}

const ProductCardMemo = memo(ProductCard);

export const ProductList = ({ ids, sale, renderButton }: IProductListProps) => (
  <S.List>
    {ids.map(id => (
      <ProductCardMemo
        key={id}
        id={id}
        sale={sale}
        renderButton={renderButton}
      />
    ))}
  </S.List>
);
