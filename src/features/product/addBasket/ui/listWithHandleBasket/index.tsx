import { type ComponentType, memo } from 'react';

// components
// eslint-disable-next-line max-len
import { ButtonAddBasket } from '@/features/product/addBasket/ui/ButtonAddBasket';

// types
import type { ProductTypes } from '@/entities/product';

const ButtonAddBasketMemo = memo(ButtonAddBasket);

export const listWithHandleBasket = <ListProps extends {}>(
  List: ComponentType<ListProps>,
) => {
  const Component = (props: ListProps) => {
    const renderButton: ProductTypes.RenderButton = product => (
      <ButtonAddBasketMemo product={product} />
    );

    return <List renderButton={renderButton} {...props} />;
  };

  return Component;
};
