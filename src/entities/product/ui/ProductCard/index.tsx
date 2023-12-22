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

const TitleMemo = memo(S.Title);
const ProductCardOptionsMemo = memo(ProductCardOptions);
const ImageMemo = memo(ProductCardImage);

export function ProductCard({ id, renderButton }: ProductCardProps) {
  const { state, totalPrice, setTotalPrice } = useProductState(id);
  const { title, image, isOptions, options, defaultPrice } = state;

  const handleSelect = useSelectProductOption({
    isOptions,
    options,
    defaultPrice,
    setTotalPrice,
  });

  return (
    <S.Wrapper>
      <ImageMemo image={image} title={title} />
      <S.Content>
        <TitleMemo>{title}</TitleMemo>
        {isOptions && (
          <ProductCardOptionsMemo handleSelect={handleSelect} id={id} />
        )}
        <ProductCardFooter
          id={id}
          title={title}
          image={image}
          price={totalPrice}
          renderButton={renderButton}
        />
      </S.Content>
    </S.Wrapper>
  );
}
