import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/libs/hooks';
import { type TagTypes } from '@/entities/tag';
import { productFilterModel } from '@/features/product/sortBy';

type TUseTagListByFilter = () => {
  selectId: TagTypes.Variable;
  handleSelect: (id: TagTypes.Variable) => void;
};

export const useTagListByFilter: TUseTagListByFilter = () => {
  const dispatch = useAppDispatch();

  const filtered = useSelector(productFilterModel.selects.filtered);

  const handleSelect = useCallback((id: TagTypes.Variable) => {
    dispatch(productFilterModel.actions.setFiltered(id));
  }, []);

  return { selectId: filtered, handleSelect };
};
