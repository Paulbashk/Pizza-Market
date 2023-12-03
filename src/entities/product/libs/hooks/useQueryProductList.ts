import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/libs/hooks';
import { useSelector } from 'react-redux';
import { queryState } from '@/entities/product/model/selectors';
import { getProductsThunk } from '@/entities/product/model/async-actions';

export const useQueryProductList = (categoryId: number) => {
  const dispatch = useAppDispatch();

  const state = useSelector(queryState);

  useEffect(() => {
    dispatch(getProductsThunk({ category: categoryId }));
  }, [categoryId]);

  return state;
};
