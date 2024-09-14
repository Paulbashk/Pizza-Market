import { FaMinus } from 'react-icons/fa';
import { type EntityId } from '@reduxjs/toolkit';

// components
import { CircleButtonColors } from '@/shared/ui/CircleButton';

// hooks
import { useReduceQuantity } from '../../libs/hooks';

// assets
import * as S from './styled';

interface IButtonReduceQuantityProps {
  id: EntityId;
}

export const ButtonReduceQuantity = ({ id }: IButtonReduceQuantityProps) => {
  const { handleReduceQuantity } = useReduceQuantity(id);

  return (
    <S.CircleButton
      color={CircleButtonColors.orange}
      onClick={handleReduceQuantity}
    >
      <FaMinus />
    </S.CircleButton>
  );
};
