import { useState } from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { type ProductCardState } from '@/entities/product/ui/ProductCard/types';
import { getByIdWithCalc } from '@/entities/product/model/selectors';

export const useProductState = (id: EntityId) => {
  const state = useSelector(getByIdWithCalc(id));

  const [totalPrice, setTotalPrice] = useState<ProductCardState>({
    ...state.price,
  });

  return { state, totalPrice, setTotalPrice };
};
