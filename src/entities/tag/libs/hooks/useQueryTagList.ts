import { useSelector } from 'react-redux';
import { queryState } from '@/entities/tag/model/selectors';
import { getTagsThunk } from '@/entities/tag/model/async-actions';
import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/libs/hooks';

export const useQueryTagList = (categoryId: number) => {
  const state = useSelector(queryState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTagsThunk({ category: categoryId }));
  }, [categoryId]);

  return state;
};
