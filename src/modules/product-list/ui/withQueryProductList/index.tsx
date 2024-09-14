'use client';

import type { ComponentType } from 'react';

// hooks
import { productHooks } from '@/entities/product';

// components
import { Loader, Error } from '@/shared/ui';

// assets
import * as S from './styled';

const { useQueryProductList } = productHooks;

type TOmitProps<T> = Omit<T, 'sale'>;

export const withQueryProductList = <ListProps extends {}>(
  List: ComponentType<ListProps>,
  categoryId: number,
) => {
  const NewList = List as unknown as ComponentType<TOmitProps<ListProps>>;

  const Component = (props: TOmitProps<ListProps>) => {
    const { isLoading, isError, error } = useQueryProductList(categoryId);

    if (isLoading) {
      return (
        <S.WrapperLoader>
          <Loader />
        </S.WrapperLoader>
      );
    }

    if (isError) {
      return <Error>{error}</Error>;
    }

    return <NewList {...props} />;
  };

  return Component;
};
