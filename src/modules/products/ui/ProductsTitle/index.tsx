import React from 'react';

// components
import { productsFilterUI } from '@/features/filter-products';

// assets
import * as S from './styled';

interface ProductsTitleProps {
  categoryName: string;
}

const { ProductsFilteredTitle } = productsFilterUI;

const ProductsTitle = ({ categoryName }: ProductsTitleProps) => (
  <S.ProductsTitle>
    <ProductsFilteredTitle categoryName={categoryName} />
  </S.ProductsTitle>
);

export default ProductsTitle;
