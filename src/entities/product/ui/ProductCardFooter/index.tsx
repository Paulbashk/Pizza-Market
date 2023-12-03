import { type EntityId } from '@reduxjs/toolkit';

// hooks
import { useRenderButton } from '@/entities/product/libs/hooks';

// types
import type {
  ProductCardRenderButton,
  ProductCardState,
} from '@/entities/product/ui/ProductCard/types';

// assets
import * as S from './styled';

interface ProductCardFooterProps {
  id: EntityId;
  product: ProductCardState;
  renderButton?: ProductCardRenderButton;
}

export function ProductCardFooter({
  id,
  product,
  renderButton,
}: ProductCardFooterProps) {
  const Button = useRenderButton({ id, product, renderButton });

  return (
    <S.Footer>
      <S.Price>{product.total} ₽</S.Price>
      {Button}
    </S.Footer>
  );
}
