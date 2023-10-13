import { type Product } from '@/entities/product/services';

const getActiveOptionId = (option: Product.Options): number =>
  option.activeItem !== undefined
    ? option.items.findIndex(item => item.label === option.activeItem)
    : 0;

export default getActiveOptionId;
