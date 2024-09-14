import { type EntityId } from '@reduxjs/toolkit';
import { memo } from 'react';

// components
import { ProductButtonDelete } from '../ProductButtonDelete';
import { ProductTotalPrice } from '../ProductTotalPrice';

// types
import { type ProductBasket } from '../../model/types';

// assets
import * as S from './styled';

const ButtonDeleteMemo = memo(ProductButtonDelete);
const TotalPriceMemo = memo(ProductTotalPrice);

interface IProductPanelProps {
  id: EntityId;
  sale: ProductBasket.Sale;
  quantity: number;
  totalQuantity: number;
  saleTotal: number;
  total: number;
  navigation?: ProductBasket.Navigation;
}

export const ProductPanel = ({
  id,
  sale,
  quantity,
  totalQuantity,
  saleTotal,
  total,
  navigation = {
    buttonAdd: undefined,
    buttonDelete: undefined,
    buttonReduce: undefined,
  },
}: IProductPanelProps) => {
  const { buttonAdd, buttonDelete, buttonReduce } = navigation;
  const isSale = sale !== null;

  return (
    <S.Wrapper>
      <S.Navigation>
        {buttonAdd && buttonAdd(id)}
        <S.Count>{quantity}</S.Count>
        {buttonReduce && buttonReduce(id)}
      </S.Navigation>
      <S.ContainerPrice>
        <S.TotalQuantityPrice>{totalQuantity} ₽</S.TotalQuantityPrice>
        <S.WrapperPrice>
          <TotalPriceMemo isSalePrice={!isSale} count={total} />
          {isSale && <TotalPriceMemo isSalePrice count={saleTotal} />}
        </S.WrapperPrice>
      </S.ContainerPrice>
      {buttonDelete && <ButtonDeleteMemo id={id} buttonDelete={buttonDelete} />}
    </S.Wrapper>
  );
};
