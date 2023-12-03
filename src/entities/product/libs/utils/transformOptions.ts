import { type Product } from '@/entities/product/model/types';
import { getActiveOptionId } from './getActiveOptionId';

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
