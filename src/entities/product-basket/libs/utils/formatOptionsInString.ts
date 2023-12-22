import type { Product } from '@/entities/product/model/types';

export const formatOptionsInString = (options: Product.TransformOption) =>
  Object.values(options)
    .map(option => option.label)
    .join(', ');
