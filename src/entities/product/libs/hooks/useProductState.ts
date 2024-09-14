'use client';

import { type EntityId } from '@reduxjs/toolkit';
import { type Dispatch, type SetStateAction, useState } from 'react';
import { type IProductCardState } from '../../ui/ProductCard/types';
import { type TUseProductByIdReturn, useProductById } from './useProductById';
import { type Product } from '../../model/types';
import { defaultProductState } from '../utils';

type TUseProductReturn = {
  state: TUseProductByIdReturn;
  price: IProductCardState;
  setPrice: Dispatch<SetStateAction<IProductCardState>>;
  defaultState: {
    total: {
      count: number;
      saleCount: number;
    };
    options: Product.TransformOption | undefined;
  };
};

export const useProductState = (
  id: EntityId,
  sale: Product.Sale,
): TUseProductReturn => {
  const state = useProductById(id);

  const { options, total } = state.price;

  const defaultState = defaultProductState({
    total,
    options,
    sale,
  });

  const [price, setPrice] = useState<IProductCardState>({ ...defaultState });

  return { state, price, setPrice, defaultState };
};
