import { type Products } from '@/entities/products/services/products';

const getActiveOptionId = (option: Products.Options): number =>
  option.activeItem !== undefined
    ? option.items.findIndex(item => item.label === option.activeItem)
    : 0;

export default getActiveOptionId;
