import { useSelector } from 'react-redux';
import { basketModel } from '@/features/product/addBasket';

export const useHeaderInfo = () =>
  useSelector(basketModel.selects.getHeaderInfo);
