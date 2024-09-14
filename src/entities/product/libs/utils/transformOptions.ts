import { getActiveOptionId } from './getActiveOptionId';
import { type Product } from '../../model/types';

export const transformOptions = (
  options: Product.Options[],
): Product.TransformOption =>
  options.reduce(
    (accumulator: Product.TransformOption, option) => (
      (accumulator[option.name] = option.items[getActiveOptionId(option)]),
      accumulator
    ),
    {},
  );
