import { type ComponentType } from 'react';

// hooks
import { useProductIds } from '@/features/product/byFiltered/libs/hooks';

type OmitProps<T> = Omit<T, 'ids'>;

export const listWithFiltered = <ListProps extends {}>(
  List: ComponentType<ListProps>,
) => {
  const NewList = List as unknown as ComponentType<OmitProps<ListProps>>;

  const Component = (props: OmitProps<ListProps>) => {
    const productList = useProductIds();

    return <NewList ids={productList} {...props} />;
  };

  return Component;
};
