import React from 'react';
import { EntityId } from '@reduxjs/toolkit';

// components
import { Product } from '@/entities/product/ui';

// assets
import * as S from './styled';

interface ProductListProps {
  ids: EntityId[];
}

const ProductList = ({ ids }: ProductListProps) => (
  <S.List>
    {ids.map(id => (
      <Product key={id} id={id} />
    ))}
  </S.List>
);

export default ProductList;
