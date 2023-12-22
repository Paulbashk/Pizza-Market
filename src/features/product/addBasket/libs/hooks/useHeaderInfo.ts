import { useSelector } from 'react-redux';
import { selects } from '@/features/product/addBasket/model';

const { getHeaderInfo } = selects;

export const useHeaderInfo = () => useSelector(getHeaderInfo);
