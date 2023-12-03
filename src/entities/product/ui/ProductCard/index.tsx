'use client';

import { memo } from 'react';

// hooks
import {
  useSelectProductOption,
  useProductState,
} from '@/entities/product/libs/hooks';

// components
import { ProductCardOptions } from '@/entities/product/ui/ProductCardOptions';
import { ProductCardImage } from '@/entities/product/ui/ProductCardImage';
import { ProductCardFooter } from '@/entities/product/ui/ProductCardFooter';

// types
import type { ProductCardProps } from './types';

// assets
import * as S from './styled';

const Title = memo(S.Title);
const ProductCardOptionsMemo = memo(ProductCardOptions);
const ImageMemo = memo(ProductCardImage);

export function ProductCard({ id, renderButton }: ProductCardProps) {
  const { state, product, setProduct } = useProductState(id);
  const { title, image, isOptions, options, defaultPrice } = state;

  const handleSelect = useSelectProductOption({
    isOptions,
    options,
    defaultPrice,
    setProduct,
  });

  return (
    <S.Wrapper>
      <ImageMemo image={image} title={title} />
      <S.Content>
        <Title>{title}</Title>
        {isOptions && (
          <ProductCardOptionsMemo handleSelect={handleSelect} id={id} />
        )}
        <ProductCardFooter
          id={id}
          renderButton={renderButton}
          product={product}
        />
      </S.Content>
    </S.Wrapper>
  );
}

export type { ProductCardRenderButton } from './types';
