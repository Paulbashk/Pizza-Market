'use client';

// components
import { useProductsTitle } from '@/features/product/byFiltered';

// assets
import * as S from './styled';

interface ProductCardsTitleProps {
  categoryName: string;
}

export const ProductCardsTitle = ({ categoryName }: ProductCardsTitleProps) => {
  const title = useProductsTitle(categoryName);

  return <S.Wrapper>{title}</S.Wrapper>;
};
