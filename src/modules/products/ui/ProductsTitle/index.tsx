import React from 'react';

// components
import { productFilterUI } from '@/features/product/byFiltered';

// assets
import * as S from './styled';

interface ProductsTitleProps {
  categoryName: string;
}

const { ProductsFilteredTitle } = productFilterUI;

const ProductsTitle = ({ categoryName }: ProductsTitleProps) => (
  <S.ProductsTitle>
    <ProductsFilteredTitle categoryName={categoryName} />
  </S.ProductsTitle>
);

export default ProductsTitle;
