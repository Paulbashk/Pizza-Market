'use client';

// hooks
import { useProductsTitle } from '../../libs/hooks';

// assets
import * as S from './styled';

interface IProductsTitleProps {
  categoryName: string;
}

export const ProductsTitle = ({ categoryName }: IProductsTitleProps) => {
  const title = useProductsTitle(categoryName);

  return <S.Title>{title}</S.Title>;
};
