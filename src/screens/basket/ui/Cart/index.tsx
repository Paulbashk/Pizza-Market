'use client';

import { productBasketListUI } from '@/modules/basket-list';

const { ProductBasketList, withNavigationProductBasketList } =
  productBasketListUI;

export const CartScreen = () => {
  const ProductBasketListWithNavigation =
    withNavigationProductBasketList(ProductBasketList);

  return <ProductBasketListWithNavigation />;
};
