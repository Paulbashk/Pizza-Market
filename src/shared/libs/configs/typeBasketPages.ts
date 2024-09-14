import type { IBasketPageType } from '@/shared/types/interfaces';

export const typeBasketPages: IBasketPageType[] = [
  {
    name: 'cart',
    slug: '/cart',
    title: 'Корзина',
    nameButton: 'Продолжить оформление',
    nextPage: '/checkout',
  },
  {
    name: 'checkout',
    slug: '/checkout',
    title: 'Оформить заказ',
    nameButton: 'Оформить заказ',
    nextPage: '/order',
  },
];
