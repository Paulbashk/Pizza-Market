'use client';

import { MdDelete } from 'react-icons/md';
import { type EntityId } from '@reduxjs/toolkit';

// components
import { CircleButtonColors } from '@/shared/ui/CircleButton';

// hooks
import { useDeleteBasket } from '../../libs/hooks';

// assets
import * as S from './styled';

interface IButtonDeleteProps {
  id: EntityId;
}

export const ButtonDelete = ({ id }: IButtonDeleteProps) => {
  const { handleDeleteBasket } = useDeleteBasket(id);

  return (
    <S.CircleButton
      color={CircleButtonColors.gray}
      onClick={handleDeleteBasket}
    >
      <MdDelete />
    </S.CircleButton>
  );
};
