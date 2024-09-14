'use client';

import { type ComponentType } from 'react';

// hooks
import { useTagListByFilter } from '../../libs/hooks';

type TPickProps<T> = Pick<T, any>;

export const withFilteredTagList = <ListProps extends {}>(
  List: ComponentType<ListProps>,
) => {
  const NewList = List as unknown as ComponentType<TPickProps<ListProps>>;

  const Component = (props: TPickProps<ListProps>) => {
    const { selectId, handleSelect } = useTagListByFilter();

    return (
      <NewList selectId={selectId} handleSelect={handleSelect} {...props} />
    );
  };

  return Component;
};
