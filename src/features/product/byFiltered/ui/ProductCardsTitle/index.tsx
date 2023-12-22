'use client';

// hooks
import { useProductsTitle } from '@/features/product/byFiltered/libs/hooks';

// assets
import * as S from './styled';

interface ProductCardsTitleProps {
  categoryName: string;
}

export const ProductCardsTitle = ({ categoryName }: ProductCardsTitleProps) => {
  const title = useProductsTitle(categoryName);

  return <S.Title>{title}</S.Title>;
};
