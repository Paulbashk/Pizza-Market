import React from 'react';

// components
import { Sorted, Tags, ProductsTitle, Products } from '@/entities/products';

// assets
import * as S from './styled';

function SectionProducts() {
  return (
    <S.SectionProducts name="products">
      <S.ProductsHeader>
        <Tags />
        <Sorted />
      </S.ProductsHeader>
      <ProductsTitle />
      <Products />
    </S.SectionProducts>
  );
}

export default SectionProducts;
