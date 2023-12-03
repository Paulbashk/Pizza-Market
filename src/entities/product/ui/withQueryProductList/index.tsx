'use client';

import { ComponentType } from 'react';

// hooks
import { useQueryProductList } from '@/entities/product/libs/hooks';

// components
import { Loader, Error } from '@/shared/ui';

// assets
import * as S from './styled';

export const withQueryProductList = <ListProps extends {}>(
  List: ComponentType<ListProps>,
  categoryId: number,
) => {
  const Component = (props: ListProps) => {
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

    return <List {...props} />;
  };

  return Component;
};
