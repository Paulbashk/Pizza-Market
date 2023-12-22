import { type Product } from '@/entities/product/model/types';
import { findIndexByKeyObject } from '@/shared/libs/utils';

export const getActiveOptionId = (option: Product.Options): number =>
  option.activeItem !== undefined
    ? findIndexByKeyObject(option.items, 'label', option.activeItem)
    : 0;
