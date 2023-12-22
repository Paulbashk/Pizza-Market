import { type Product } from '@/entities/product/model/types';
import { reduceSumByKey } from '@/shared/libs/utils';

export const calcSumOptions = (options: Product.TransformOption): number =>
  reduceSumByKey(Object.values(options), 'price');
