import { type EntityId } from '@reduxjs/toolkit';

// components
import { deleteBasketUI } from '@/features/product/deleteBasket';
import { updateBasketUI } from '@/features/product/updateBasket';

const { ButtonDelete } = deleteBasketUI;
const { ButtonAddQuantity, ButtonReduceQuantity } = updateBasketUI;

export const useNavigation = () => {
  const renderDeleteButton = (id: EntityId) => <ButtonDelete id={id} />;
  const renderAddButton = (id: EntityId) => <ButtonAddQuantity id={id} />;
  const renderReduceButton = (id: EntityId) => <ButtonReduceQuantity id={id} />;

  return {
    renderDeleteButton,
    renderAddButton,
    renderReduceButton,
  };
};
