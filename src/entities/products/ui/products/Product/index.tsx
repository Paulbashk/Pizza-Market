import React, { useCallback } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { EntityId } from '@reduxjs/toolkit';

// services
import {
  type Products,
  productSelect,
} from '@/entities/products/services/products';

// utils
import { calcSumOptions } from '@/entities/products/utils';

// components
import { ButtonColors } from '@/shared/ui';
import { ProductVariables } from '@/entities/products/ui/products';

// assets
import * as S from './styled';

const ImageMemo = React.memo(Image);
const TitleMemo = React.memo(S.Title);

interface ProductProps {
  id: EntityId;
}

interface ProductState {
  total: number;
  options?: Products.TransformOption;
}

function Product({ id }: ProductProps) {
  const { price, defaultPrice, image, title, isOptions, options } = useSelector(
    productSelect.getById(id),
  );

  // Количество товаров, добавленных в корзину
  const [quantity, setQuantity] = React.useState<number>(0);

  // Общая стоимость продукта включая возможные опции
  const [product, setProduct] = React.useState<ProductState>({ ...price });

  const handleSelect = useCallback((optionId: number, selected: string) => {
    if (!isOptions) return;

    const { items, name } = options![optionId];

    // Выбранный вариант опции
    const selectedOption =
      items[items.findIndex(radio => radio.label === selected)];

    setProduct(currentState => {
      const updateOptions = {
        ...currentState.options,
        [name]: selectedOption,
      };

      return {
        total: defaultPrice + calcSumOptions(updateOptions),
        options: updateOptions,
      };
    });
  }, []);

  const handleBasket = () => {
    setQuantity(currentState => currentState + 1);
  };

  return (
    <S.ProductWrapper>
      <S.WrapperImage>
        <ImageMemo src={image} alt="" width={0} height={0} />
      </S.WrapperImage>
      <S.Content>
        <TitleMemo>{title}</TitleMemo>
        <ProductVariables handleSelect={handleSelect} id={id} />
        <S.Prices>
          <S.Price>{product.total} ₽</S.Price>
          <S.ButtonBasket
            color={ButtonColors.transparent}
            onClick={handleBasket}
            isActive={false}
          >
            в корзину
            {quantity !== 0 && <span>{quantity}</span>}
          </S.ButtonBasket>
        </S.Prices>
      </S.Content>
    </S.ProductWrapper>
  );
}

export default React.memo(Product);
