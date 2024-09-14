import { useSelector } from 'react-redux';
import { getPrice } from '../../model/selectors';
import { type ProductBasket } from '../../model/types';

type TUsePrice = () => {
  count: number;
  oldCount: number;
  sale: ProductBasket.Sale;
  promocode: ProductBasket.Promocode;
};

export const usePrice: TUsePrice = () => useSelector(getPrice);
