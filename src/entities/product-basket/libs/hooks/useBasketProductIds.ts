import { useSelector } from 'react-redux';
import { getIds } from '@/entities/product-basket/model/selectors';

export const useBasketProductIds = () => useSelector(getIds);
