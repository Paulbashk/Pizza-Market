// components
import { Container } from '@/shared/ui';
import {
  LayoutBasketRouter,
  type ILayoutBasketRouterProps,
} from '../LayoutBasketRouter';

export interface ILayoutBasketProps extends ILayoutBasketRouterProps {}

export const LayoutBasket = ({ children, promocodes }: ILayoutBasketProps) => (
  <section className="basket" id="section-basket">
    <Container>
      <LayoutBasketRouter promocodes={promocodes}>
        {children}
      </LayoutBasketRouter>
    </Container>
  </section>
);
