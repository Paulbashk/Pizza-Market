import { type MouseEvent, memo } from 'react';

// assets
import * as S from './styled';

interface BasketHeaderButtonProps {
  price: number;
  isBasketPageActive: boolean;
}

const TitleMemo = memo(S.Title);

export const BasketHeaderButton = ({
  isBasketPageActive,
  price,
}: BasketHeaderButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (!isBasketPageActive) {
      event.preventDefault();
    }
  };

  return (
    <S.BasketLink href="/basket" onClick={handleClick} scroll={false}>
      <TitleMemo>Корзина</TitleMemo>
      <S.Price>{price} р.</S.Price>
    </S.BasketLink>
  );
};
