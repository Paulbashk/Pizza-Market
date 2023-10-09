import React from 'react';
import { Error } from '@/shared/ui';
import {
  useQuerySelector,
  type ParamUseQuerySelector,
} from '@/shared/libs/hooks';
import { type QueryState } from '@/shared/libs/types';

const withQueryResolver =
  <ListProps extends {}, ReturnType extends QueryState>(
    ListComponent: React.ComponentType<ListProps>,
    fetching: ParamUseQuerySelector<ReturnType>,
  ) =>
  <LoaderProps extends {}>(
    LoaderComponent: React.ComponentType<LoaderProps> | React.ReactElement,
  ) => {
    const Component = (props: ListProps | LoaderProps) => {
      const { isLoading, isError, error } = useQuerySelector({ ...fetching });

      if (isLoading) {
        if (typeof LoaderComponent === 'function') {
          return <LoaderComponent {...(props as LoaderProps)} />;
        }

        return LoaderComponent;
      }

      if (isError) {
        return <Error>{error}</Error>;
      }

      return <ListComponent {...(props as ListProps)} />;
    };

    return React.memo(Component);
  };

export default withQueryResolver;
