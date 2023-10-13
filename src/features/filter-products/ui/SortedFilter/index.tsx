import React from 'react';
import { useSelector } from 'react-redux';

// services
import { filterSelect } from '@/features/filter-products';

// components
import { sortedUI } from '@/entities/sorted';

// hooks
import { useActions } from '@/shared/libs/hooks';

// assets
import config from '@/features/filter-products/configs';

const { Sorted } = sortedUI;

const SortedFilter = () => {
  const { setSorted } = useActions();

  const { sortedTypes } = config;
  const sort = useSelector(filterSelect.sort);

  const onSelected = (id: number) => {
    setSorted(sortedTypes[id].type);
  };

  return <Sorted sort={sort} items={sortedTypes} onSelected={onSelected} />;
};

export default SortedFilter;
