'use client';

import { type ComponentType } from 'react';

// hooks
import { useHeaderInfo } from '@/features/product/addBasket/libs/hooks';

type OmitProps<T> = Omit<T, 'price' | 'isBasketPageActive'>;

export const withBasketHeaderPrice = <BasketHeaderProps extends {}>(
  BasketComponent: ComponentType<BasketHeaderProps>,
) => {
  const NewBasketComponent = BasketComponent as unknown as ComponentType<
    OmitProps<BasketHeaderProps>
  >;

  const Component = (props: OmitProps<BasketHeaderProps>) => {
    const { price, isProducts } = useHeaderInfo();

    return (
      <NewBasketComponent
        price={price}
        isBasketPageActive={isProducts}
        {...props}
      />
    );
  };

  return Component;
};
