import { type Product } from '@/entities/product/model/types';

const calcSumOptions = (options: Product.TransformOption): number =>
  Object.values(options).reduce(
    (accumulator, option) => accumulator + option.price,
    0,
  );

export default calcSumOptions;
