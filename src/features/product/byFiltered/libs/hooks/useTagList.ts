import { useAppDispatch } from '@/shared/libs/hooks';
import { useSelector } from 'react-redux';
import { type TagTypes } from '@/entities/tag';
import { selects, actions } from '@/features/product/byFiltered/model';
import { useCallback } from 'react';

export const useTagList = () => {
  const dispatch = useAppDispatch();

  const filtered = useSelector(selects.filtered);

  const handleSelect = useCallback((id: TagTypes.Variable) => {
    dispatch(actions.setFiltered(id));
  }, []);

  return { selectId: filtered, handleSelect };
};
