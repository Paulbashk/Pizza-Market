import { type Products } from '@/entities/products/services/products';

const calcSumOptions = (options: Products.TransformOption): number =>
  Object.values(options).reduce(
    (accumulator, option) => accumulator + option.price,
    0,
  );

export default calcSumOptions;
