import { type Product } from '@/entities/product/model/types';

export const calcSumOptions = (options: Product.TransformOption): number =>
  Object.values(options).reduce(
    (accumulator, option) => accumulator + option.price,
    0,
  );
