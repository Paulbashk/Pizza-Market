// types
import type { Product } from '../../model/types';

// assets
import * as S from './styled';

interface IProductCardFooterProps extends Product.RenderButtonProps {
  renderButton?: Product.RenderButton;
  sale: Product.Sale;
}

export function ProductCardFooter({
  renderButton,
  price,
  sale,
  ...otherProps
}: IProductCardFooterProps) {
  return (
    <S.Footer>
      <S.Price $isSale={sale !== null}>{price.total.count} ₽</S.Price>
      {sale && <S.PriceSale>{price.total.saleCount} ₽</S.PriceSale>}
      {renderButton && renderButton({ price, ...otherProps })}
    </S.Footer>
  );
}
