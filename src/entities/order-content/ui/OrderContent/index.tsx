// components
import { OrangeLink } from '@/shared/ui';

// assets
import * as S from './styled';

interface IOrderContentProps {
  order: string;
}

export const OrderContent = ({ order }: IOrderContentProps) => {
  const { countItems, price, id } = JSON.parse(order);
  const { count } = price;

  return (
    <S.Content>
      <S.WrapperText>
        <div className="wrapper-title">
          <S.IconPizza />
          <S.Title>Спасибо за заказ!</S.Title>
        </div>
        <p>
          Ваш заказ <b>№{id}</b> на сумму <b>{count}</b> рублей успешно
          оформлен. Заказ включает <b>{countItems} ед. товара</b>. Мы свяжемся с
          вами в ближайшее время для уточнения деталей оплаты и доставки.
        </p>
      </S.WrapperText>
      <OrangeLink href="/">Вернуться к товарам</OrangeLink>
    </S.Content>
  );
};
