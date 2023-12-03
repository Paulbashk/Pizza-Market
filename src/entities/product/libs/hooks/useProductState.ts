import { useState } from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { type ProductCardState } from '@/entities/product/ui/ProductCard/types';
import { getById } from '@/entities/product/model/selectors';

export const useProductState = (id: EntityId) => {
  const state = useSelector(getById(id));

  const [product, setProduct] = useState<ProductCardState>({
    ...state.price,
  });

  return { state, product, setProduct };
};
