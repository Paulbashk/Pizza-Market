import { type ComponentType, memo } from 'react';

// types
import type { Basket } from '@/features/product/addBasket/model/types';

// components
// eslint-disable-next-line max-len
import { ButtonAddBasket } from '@/features/product/addBasket/ui/ButtonAddBasket';

const Button = memo(ButtonAddBasket);

export const listWithHandleBasket = <ListProps extends {}>(
  List: ComponentType<ListProps>,
) => {
  const Component = (props: ListProps) => {
    const renderButton = (
      id: Basket.ProductId,
      product: Basket.ProductSelect,
    ) => <Button id={id} product={product} />;

    return <List renderButton={renderButton} {...props} />;
  };

  return Component;
};
