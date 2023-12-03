import { useAppDispatch } from '@/shared/libs/hooks';
import { useSelector } from 'react-redux';
import { selects, actions } from '@/features/product/byFiltered/model';
import { sortedConfig } from '@/features/product/byFiltered/configs';

export const useProductSort = () => {
  const { sortedTypes } = sortedConfig;

  const dispatch = useAppDispatch();

  const sort = useSelector(selects.sort);

  const onSelected = (id: number) => {
    dispatch(actions.setSorted(sortedTypes[id].type));
  };

  return { sort, onSelected, sortedTypes };
};
