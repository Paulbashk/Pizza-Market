'use client';

import Image from 'next/image';
import { type EntityId } from '@reduxjs/toolkit';

// hooks
import { useBasketProduct } from '@/entities/product-basket/libs/hooks';

// types
import { ProductBasket } from '@/entities/product-basket/model/types';

// assets
import * as S from './styled';

interface ProductBasketCardProps {
  id: EntityId;
  navigation?: ProductBasket.Navigation;
}

export const ProductBasketCard = ({
  id,
  navigation = {},
}: ProductBasketCardProps) => {
  const { buttonAdd, buttonDelete, buttonReduce } = navigation;

  const { title, image, quantity, totalQuantity, descOptions, total } =
    useBasketProduct(id);

  return (
    <S.Product>
      <S.WrapperImage>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </S.WrapperImage>
      <S.WrapperInfo>
        <S.Title>{title}</S.Title>
        {descOptions && <p>{descOptions}</p>}
      </S.WrapperInfo>
      <S.Navigation>
        {buttonAdd && buttonAdd(id)}
        <S.Count>{quantity}</S.Count>
        {buttonReduce && buttonReduce(id)}
      </S.Navigation>
      <S.WrapperPrice>
        <S.TotalQuantityPrice>{totalQuantity} ₽</S.TotalQuantityPrice>
        <S.TotalPrice>{total} ₽</S.TotalPrice>
      </S.WrapperPrice>
      {buttonDelete && <S.WrapperDelete>{buttonDelete(id)}</S.WrapperDelete>}
    </S.Product>
  );
};
