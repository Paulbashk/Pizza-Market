import { type AppState } from '@/app/_root/store';
import { type EntityId } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { byId } from '../../model/selectors';
import { formatOptionsInString, calcPriceWithSale } from '../utils';
import { ProductBasket } from '../../model/types';

interface IReturnUseBasketProductById extends ProductBasket.Product {
  saleTotal: number;
  descOptions: string | undefined;
}

type TUseBasketProductById = (
  id: EntityId,
  sale: ProductBasket.Sale,
) => IReturnUseBasketProductById;

export const useBasketProductById: TUseBasketProductById = (id, sale) => {
  const {
    options,
    total: defaultTotal,
    totalQuantity: defaultTotalQuantity,
    ...other
  } = useSelector((state: AppState) => byId(state, id))!;

  const price = sale
    ? {
        total: defaultTotal,
        totalQuantity: calcPriceWithSale(defaultTotalQuantity, sale),
        saleTotal: calcPriceWithSale(defaultTotal, sale),
      }
    : {
        total: defaultTotal,
        totalQuantity: defaultTotalQuantity,
        saleTotal: 0,
      };

  const descOptions = options && formatOptionsInString(options);

  return {
    descOptions,
    ...price,
    ...other,
  };
};
