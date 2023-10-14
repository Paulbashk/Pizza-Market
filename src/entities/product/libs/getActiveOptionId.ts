import { type Product } from '@/entities/product/model/types';

const getActiveOptionId = (option: Product.Options): number =>
  option.activeItem !== undefined
    ? option.items.findIndex(item => item.label === option.activeItem)
    : 0;

export default getActiveOptionId;
