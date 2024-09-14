'use client';

import { memo } from 'react';
import { type EntityId } from '@reduxjs/toolkit';

// hooks
import { useBasketProductById } from '../../libs/hooks';

// types
import { type ProductBasket } from '../../model/types';

// components
import { ProductTitle } from '../ProductTitle';
import { ProductImage } from '../ProductImage';
import { ProductPanel } from '../ProductPanel';

// assets
import * as S from './styled';

interface IProductBasketCardProps {
  id: EntityId;
  sale: ProductBasket.Sale;
  navigation?: ProductBasket.Navigation;
}

const ProductImageMemo = memo(ProductImage);
const ProductTitleMemo = memo(ProductTitle);

export const ProductBasketCard = ({
  id,
  sale,
  navigation = {},
}: IProductBasketCardProps) => {
  const { title, image, descOptions, ...other } = useBasketProductById(
    id,
    sale,
  );

  return (
    <S.Product>
      <ProductImageMemo image={image} title={title} />
      <ProductTitleMemo title={title} desc={descOptions} />
      <ProductPanel sale={sale} navigation={navigation} {...other} />
    </S.Product>
  );
};
