'use client';

import { basketUI } from '@/features/product/addBasket';
import { BasketHeaderButton } from '@/entities/basket-header';

const { withBasketHeaderPrice } = basketUI;

export const HeaderBasket = () => {
  const BasketHeaderButtonPrice = withBasketHeaderPrice(BasketHeaderButton);

  return <BasketHeaderButtonPrice />;
};
