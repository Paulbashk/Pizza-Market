import { type Product } from '@/entities/product/services';
import getActiveOptionId from './getActiveOptionId';

const transformOptions = (
  options: Product.Options[],
): Product.TransformOption =>
  options.reduce(
    (accumulator: Product.TransformOption, option) => (
      (accumulator[option.name] = option.items[getActiveOptionId(option)]),
      accumulator
    ),
    {},
  );

export default transformOptions;