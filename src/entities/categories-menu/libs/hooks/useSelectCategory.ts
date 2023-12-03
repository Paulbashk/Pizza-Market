import { type MouseEvent } from 'react';
import { productFilterModel } from '@/features/product/byFiltered';
import { useAppDispatch } from '@/shared/libs/hooks';

export const useSelectCategory = (categoryId: number) => {
  const dispatch = useAppDispatch();

  const handleClick = (id: number, event: MouseEvent<HTMLElement>) => {
    if (categoryId === id) {
      event.preventDefault();
    } else {
      dispatch(productFilterModel.actions.resetState());
    }
  };

  return handleClick;
};
