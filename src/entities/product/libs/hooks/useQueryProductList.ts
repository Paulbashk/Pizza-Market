'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/libs/hooks';
import { useSelector } from 'react-redux';
import { queryState } from '../../model/selectors';
import { getProductsThunk } from '../../model/async-actions';

type TUseQueryProductListReturn = {
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
};

export const useQueryProductList = (
  categoryId: number,
): TUseQueryProductListReturn => {
  const dispatch = useAppDispatch();

  const state = useSelector(queryState);

  useEffect(() => {
    dispatch(getProductsThunk({ category: categoryId }));
  }, [categoryId]);

  return state;
};
