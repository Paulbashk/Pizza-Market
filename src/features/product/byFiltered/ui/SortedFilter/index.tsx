import React from 'react';
import { useSelector } from 'react-redux';

// services
import { selects, actions } from '@/features/product/byFiltered/model';

// components
import { Sorted } from '@/entities/sorted';

// hooks
import { useAppDispatch } from '@/shared/libs/hooks';

// assets
import { sortedConfig } from '@/features/product/byFiltered/configs';

const SortedFilter = () => {
  const dispatch = useAppDispatch();
  const { sortedTypes } = sortedConfig;
  const sort = useSelector(selects.sort);

  const onSelected = (id: number) => {
    dispatch(actions.setSorted(sortedTypes[id].type));
  };

  return <Sorted sort={sort} items={sortedTypes} onSelected={onSelected} />;
};

export default SortedFilter;
