import { type ComponentType } from 'react';

// hooks
import { productFilterHooks } from '@/features/product/sortBy';

const { useProductIds } = productFilterHooks;

type TOmitProps<T> = Omit<T, 'ids'>;

export const withFilteredProductList = <ListProps extends {}>(
  List: ComponentType<ListProps>,
) => {
  const NewList = List as unknown as ComponentType<TOmitProps<ListProps>>;

  const Component = (props: TOmitProps<ListProps>) => {
    const { ids, sale } = useProductIds();

    return <NewList ids={ids} sale={sale} {...props} />;
  };

  return Component;
};
