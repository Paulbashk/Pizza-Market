import { type ReactNode } from 'react';

// services
import { basketScreenService } from '@/shared/server/api';

// layout
import { LayoutBasket } from '@/app/_root/layouts/layout-basket';

interface IBasketLayoutPagesProps {
  children: ReactNode;
}

export default async function BasketLayoutPages({
  children,
}: IBasketLayoutPagesProps) {
  const promocodes = await basketScreenService();

  return <LayoutBasket promocodes={promocodes}>{children}</LayoutBasket>;
}
