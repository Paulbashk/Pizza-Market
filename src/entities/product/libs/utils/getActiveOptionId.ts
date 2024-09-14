import { findIndexByKeyObject } from '@/shared/libs/utils';
import { type Product } from '../../model/types';

export const getActiveOptionId = (option: Product.Options): number =>
  option.activeItem !== undefined
    ? findIndexByKeyObject(option.items, 'label', option.activeItem)
    : 0;
