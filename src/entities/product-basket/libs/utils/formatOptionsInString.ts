import { type ProductTypes } from '../../@x/product';

export const formatOptionsInString = (
  options: ProductTypes.TransformOption,
): string =>
  Object.values(options)
    .map(option => option.label)
    .join(', ');
