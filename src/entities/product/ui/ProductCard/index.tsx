'use client';

import { memo } from 'react';

// hooks
import { useSelectProductOption, useProductState } from '../../libs/hooks';

// components
import { ProductCardOptions } from '../ProductCardOptions';
import { ProductCardImage } from '../ProductCardImage';
import { ProductCardFooter } from '../ProductCardFooter';

// types
import type { IProductCardProps } from './types';

// assets
import * as S from './styled';

const TitleMemo = memo(S.Title);
const ProductCardOptionsMemo = memo(ProductCardOptions);
const ImageMemo = memo(ProductCardImage);

export function ProductCard({ id, sale, renderButton }: IProductCardProps) {
  const { state, price, setPrice, defaultState } = useProductState(id, sale);
  const { title, image, isOptions, options } = state;

  const handleSelect = useSelectProductOption({
    isOptions,
    options,
    sale,
    defaultTotal: defaultState.total,
    setPrice,
  });

  return (
    <S.Wrapper>
      <ImageMemo image={image} title={title} />
      <S.Content>
        <TitleMemo>{title}</TitleMemo>
        {isOptions && (
          <ProductCardOptionsMemo
            options={options!}
            handleSelect={handleSelect}
          />
        )}
        <ProductCardFooter
          id={id}
          title={title}
          image={image}
          price={price}
          sale={sale}
          renderButton={renderButton}
        />
      </S.Content>
    </S.Wrapper>
  );
}
