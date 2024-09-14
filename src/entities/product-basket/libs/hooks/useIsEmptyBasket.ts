import { useSelector } from 'react-redux';
import { isEmptyBasket } from '../../model/selectors';

export const useIsEmptyBasket = (): boolean => useSelector(isEmptyBasket);
