'use client';

import { useAppDispatch } from '@/shared/libs/hooks';
import { useSelector } from 'react-redux';
import { selects, actions } from '../../model';
import { sortedTypes } from '../../configs';
import { SortEnumTypes } from '../../model/types';

type TUseSorted = () => {
  sort: SortEnumTypes;
  onSelected: (id: number) => void;
  sortedTypes: {
    type: SortEnumTypes;
    value: string;
    label: string;
  }[];
};

export const useSorted: TUseSorted = () => {
  const dispatch = useAppDispatch();

  const sort = useSelector(selects.sort);

  const onSelected = (id: number) => {
    dispatch(actions.setSorted(sortedTypes[id].type));
  };

  return { sort, onSelected, sortedTypes };
};
