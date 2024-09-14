import { reduceSumByKey } from '@/shared/libs/utils';
import { type Product } from '../../model/types';

export const calcSumOptions = (options: Product.TransformOption): number =>
  reduceSumByKey(Object.values(options), 'price');
