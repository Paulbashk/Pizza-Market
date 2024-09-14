'use client';

import { type ComponentType, memo } from 'react';
import { type EntityId } from '@reduxjs/toolkit';

// components
import { ButtonDelete } from '@/features/basket-product/delete';
import { updateBasketUI } from '@/features/basket-product/update';

const { ButtonAddQuantity, ButtonReduceQuantity } = updateBasketUI;

const ButtonDeleteMemo = memo(ButtonDelete);
const ButtonAddMemo = memo(ButtonAddQuantity);
const ButtonReduceMemo = memo(ButtonReduceQuantity);

export const withNavigationProductBasketList = <ListProps extends {}>(
  List: ComponentType<ListProps>,
) => {
  const Component = (props: ListProps) => {
    const buttonDelete = (id: EntityId) => <ButtonDeleteMemo id={id} />;
    const buttonAdd = (id: EntityId) => <ButtonAddMemo id={id} />;
    const buttonReduce = (id: EntityId) => <ButtonReduceMemo id={id} />;

    return (
      <List
        navigation={{
          buttonDelete,
          buttonAdd,
          buttonReduce,
        }}
        {...props}
      />
    );
  };

  return Component;
};
