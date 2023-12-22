'use client';

// components
import { productBasketUI } from '@/entities/product-basket';

// hooks
import { useNavigation } from '@/modules/basket/libs/hooks';

const { ProductBasketList } = productBasketUI;

export const ProductBasketCards = () => {
  const { renderDeleteButton, renderAddButton, renderReduceButton } =
    useNavigation();

  return (
    <ProductBasketList
      navigation={{
        buttonDelete: renderDeleteButton,
        buttonAdd: renderAddButton,
        buttonReduce: renderReduceButton,
      }}
    />
  );
};
