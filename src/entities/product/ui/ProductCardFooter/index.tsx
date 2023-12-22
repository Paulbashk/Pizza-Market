// types
import type { Product } from '@/entities/product/model/types';

// assets
import * as S from './styled';

interface ProductCardFooterProps extends Product.RenderButtonProps {
  renderButton?: Product.RenderButton;
}

export function ProductCardFooter({
  id,
  price,
  renderButton,
  ...otherProps
}: ProductCardFooterProps) {
  const Button = renderButton
    ? renderButton({ id, price, ...otherProps })
    : null;

  return (
    <S.Footer>
      <S.Price>{price.total} ₽</S.Price>
      {Button}
    </S.Footer>
  );
}
