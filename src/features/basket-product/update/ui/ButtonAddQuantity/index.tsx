import { FaPlus } from 'react-icons/fa';
import { type EntityId } from '@reduxjs/toolkit';

// components
import { CircleButtonColors } from '@/shared/ui/CircleButton';

// hooks
import { useAddQuantity } from '../../libs/hooks';

// assets
import * as S from './styled';

interface IButtonAddQuantityProps {
  id: EntityId;
}

export const ButtonAddQuantity = ({ id }: IButtonAddQuantityProps) => {
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
