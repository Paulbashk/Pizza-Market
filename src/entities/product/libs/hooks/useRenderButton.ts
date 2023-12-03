import { useMemo } from 'react';
import type {
  ProductCardRenderButton,
  ProductCardState,
} from '@/entities/product/ui/ProductCard/types';
import { type EntityId } from '@reduxjs/toolkit';

type TypeArgUseRenderButton = {
  id: EntityId;
  renderButton?: ProductCardRenderButton;
  product: ProductCardState;
};

export const useRenderButton = ({
  renderButton,
  id,
  product,
}: TypeArgUseRenderButton) =>
  useMemo(
    () => ({ render: renderButton ? renderButton(id, product) : null }),
    [],
  ).render;
