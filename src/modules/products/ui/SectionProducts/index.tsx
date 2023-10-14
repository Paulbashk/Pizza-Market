import React from 'react';

// components
import { productFilterUI } from '@/features/product/byFiltered';
import { Products, ProductsTitle, TagsProducts } from '@/modules/products/ui';

// types
import { ICategory } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface SectionProductsProps {
  category: ICategory;
}

const { SortedFilter } = productFilterUI;

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
