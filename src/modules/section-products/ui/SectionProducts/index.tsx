import { type ReactNode } from 'react';

// types
import type { ICategory } from '@/shared/types/interfaces';

// components
import { SortByDropdown } from '@/features/product/sortBy';
import { ProductsTitle } from '../ProductsTitle';

// assets
import * as S from './styled';

interface ISectionProductsProps {
  category: ICategory;
  tagListRender?: (categoryId: number) => ReactNode;
  productListRender?: (categoryId: number) => ReactNode;
}

export function SectionProducts({
  category,
  tagListRender,
  productListRender,
}: ISectionProductsProps) {
  const { id, name } = category;

  return (
    <S.Section name="products">
      <S.Header>
        {tagListRender && tagListRender(id)}
        <SortByDropdown />
      </S.Header>
      <ProductsTitle categoryName={name} />
      {productListRender && productListRender(id)}
    </S.Section>
  );
}
