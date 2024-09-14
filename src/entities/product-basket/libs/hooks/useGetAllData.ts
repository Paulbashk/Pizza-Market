import { type AppState } from '@/app/_root/store';
import { useSelector } from 'react-redux';
import { getAllData } from '../../model/selectors';
import { type ProductBasket } from '../../model/types';

type TUseGetAllData = () => {
  items: ProductBasket.Product[];
  price: {
    count: number;
    oldCount: number;
    sale: ProductBasket.Sale;
    promocode: ProductBasket.Promocode;
  };
  countItems: number;
};

export const useGetAllData: TUseGetAllData = () =>
  useSelector((state: AppState) => getAllData(state));
