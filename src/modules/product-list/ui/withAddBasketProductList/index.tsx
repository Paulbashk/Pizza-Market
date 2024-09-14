import { type ComponentType, memo } from 'react';

// types
import type { ProductTypes } from '@/entities/product';

// components
import { ButtonAddBasket } from '@/features/basket-product/add';

const ButtonAddBasketMemo = memo(ButtonAddBasket);

export const withAddButtonBasketProductList = <ListProps extends {}>(
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
