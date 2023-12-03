'use client';

import { type ComponentType } from 'react';

// hooks
import { useQueryTagList } from '@/entities/tag/libs/hooks';

// components
import { Loader, Error } from '@/shared/ui';

export const tagListWithQuery = <ListProps extends {}>(
  List: ComponentType<ListProps>,
  categoryId: number,
) => {
  const Component = (props: ListProps) => {
    const { isLoading, isError, error } = useQueryTagList(categoryId);

    if (isLoading) {
      return <Loader margin={-2} />;
    }

    if (isError) {
      return <Error>{error}</Error>;
    }

    return <List {...props} />;
  };

  return Component;
};
