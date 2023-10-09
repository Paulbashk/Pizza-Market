import { type Products } from '@/entities/products/services/products';
import getActiveOptionId from './getActiveOptionId';

const transformOptions = (
  options: Products.Options[],
): Products.TransformOption =>
  options.reduce(
    (accumulator: Products.TransformOption, option) => (
      (accumulator[option.name] = option.items[getActiveOptionId(option)]),
      accumulator
    ),
    {},
  );

export default transformOptions;
