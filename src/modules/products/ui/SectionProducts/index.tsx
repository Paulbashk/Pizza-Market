import React from 'react';

// components
import { productsFilterUI } from '@/features/filter-products';
import { Products, ProductsTitle, TagsProducts } from '@/modules/products/ui';

// types
import { ICategory } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface SectionProductsProps {
  category: ICategory;
}

const { SortedFilter } = productsFilterUI;

function SectionProducts({ category }: SectionProductsProps) {
  const { id, name } = category;

  return (
    <S.SectionProducts name="products">
      <S.ProductsHeader>
        <TagsProducts categoryId={id} />
        <SortedFilter />
      </S.ProductsHeader>
      <ProductsTitle categoryName={name} />
      <Products categoryId={id} />
    </S.SectionProducts>
  );
}

export default SectionProducts;
