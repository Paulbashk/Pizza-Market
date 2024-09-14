import { type EntityId } from '@reduxjs/toolkit';

// types
import { type ProductBasket } from '../../model/types';

// assets
import * as S from './styled';

interface IProductButtonDeleteProps {
  id: EntityId;
  buttonDelete: ProductBasket.RenderButtonDelete;
}

export const ProductButtonDelete = ({
  id,
  buttonDelete,
}: IProductButtonDeleteProps) => (
  <S.WrapperDelete>{buttonDelete(id)}</S.WrapperDelete>
);
