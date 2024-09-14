'use client';

import { type ComponentType } from 'react';

// hooks
import { tagHooks } from '@/entities/tag';

// components
import { Loader, Error } from '@/shared/ui';

const { useQueryTagList } = tagHooks;

export const withQueryTagList = <ListProps extends {}>(
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
