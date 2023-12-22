import { FaPlus } from 'react-icons/fa';
import { type EntityId } from '@reduxjs/toolkit';

// components
import { CircleButtonColors } from '@/shared/ui/CircleButton';

// hooks
import { useAddQuantity } from '@/features/product/updateBasket/libs/hooks';

// assets
import * as S from './styled';

interface ButtonAddQuantityProps {
  id: EntityId;
}

export const ButtonAddQuantity = ({ id }: ButtonAddQuantityProps) => {
  const { handleAddQuantity } = useAddQuantity(id);

  return (
    <S.CircleButton
      color={CircleButtonColors.orange}
      onClick={handleAddQuantity}
    >
      <FaPlus />
    </S.CircleButton>
  );
};
