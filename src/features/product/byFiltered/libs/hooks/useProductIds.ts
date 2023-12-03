import { useSelector } from 'react-redux';
import { selects } from '@/features/product/byFiltered/model';

export const useProductIds = () => useSelector(selects.getProductIdsByFilter);
