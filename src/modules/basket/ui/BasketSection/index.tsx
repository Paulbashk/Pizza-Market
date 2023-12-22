// components
import { Container } from '@/shared/ui';
import { ProductBasketCards } from '@/modules/basket/ui/ProductBasketCards';

// assets
import * as S from './styled';

export const BasketSection = () => {
  console.log('cart dev');

  return (
    <section className="basket" id="section-basket">
      <Container>
        <S.WrapperFlex>
          <S.WrapperBasket>
            <S.WrapperTitle>
              <S.TitleIcon />
              <S.TitleBasket>Корзина</S.TitleBasket>
            </S.WrapperTitle>
            <ProductBasketCards />
          </S.WrapperBasket>
          <S.WrapperOrder>
            <h3>Ваш заказ</h3>
            <div>
              <div>
                <span>Сумма заказа</span>
                <span>500 ₽</span>
              </div>
            </div>
          </S.WrapperOrder>
        </S.WrapperFlex>
      </Container>
    </section>
  );
};
