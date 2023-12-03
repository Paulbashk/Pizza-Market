'use client';

// hooks
import { useProductSort } from '@/features/product/byFiltered/libs/hooks';

// components
import { Sorted } from '@/entities/sorted';

export const ProductCardsSort = () => {
  const { sort, onSelected, sortedTypes } = useProductSort();

  return <Sorted sort={sort} items={sortedTypes} onSelected={onSelected} />;
};
