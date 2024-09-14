import { useSelector } from 'react-redux';
import { totalPrice } from '../../model/selectors';

export const useTotalPrice = (): number => useSelector(totalPrice);
