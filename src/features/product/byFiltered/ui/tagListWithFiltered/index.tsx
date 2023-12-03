'use client';

import { type ComponentType } from 'react';

// hooks
import { useTagList } from '@/features/product/byFiltered/libs/hooks';

type PickProps<T> = Pick<T, any>;

export const tagListWithFiltered = <ListProps extends {}>(
  List: ComponentType<ListProps>,
) => {
  const NewList = List as unknown as ComponentType<PickProps<ListProps>>;

  const Component = (props: PickProps<ListProps>) => {
    const { selectId, handleSelect } = useTagList();

    return (
      <NewList selectId={selectId} handleSelect={handleSelect} {...props} />
    );
  };

  return Component;
};
