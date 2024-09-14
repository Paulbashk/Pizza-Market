'use client';

import { type ReactNode, type ComponentProps } from 'react';

// types
import type { IOrderClient, IPromocode } from '@/shared/types/interfaces';

// hooks
import { useBasketPage } from '../../libs/hooks';

// components
import { LayoutContent } from '../LayoutContent';
import { withBasketMiddleware } from '../withBasketMiddleware';

export interface ILayoutBasketRouterProps {
  children: ReactNode;
  promocodes?: IPromocode[];
}

export const LayoutBasketRouter = ({
  children,
  promocodes,
}: ILayoutBasketRouterProps) => {
  const { page, isEmptyBasket } = useBasketPage();

  if (!page) return null;

  const WithLayoutBasketMiddleware = withBasketMiddleware<
    IOrderClient,
    ComponentProps<typeof LayoutContent>
  >({
    Layout: LayoutContent,
    page,
    isEmptyBasket,
    renderContent: children,
  });

  return <WithLayoutBasketMiddleware promocodes={promocodes} />;
};
