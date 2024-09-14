import { type Product } from '../../model/types';
import { productBasketUtils } from '../../@x/product-basket';

const { calcPriceWithSale } = productBasketUtils;

export const transformOptionsPriceWithSale = (
  options: Product.TransformOption,
  sale: number,
): Product.TransformOption =>
  Object.fromEntries(
    Object.entries(options).map(option => ({
      ...option,
      price: calcPriceWithSale(option[1].price, sale),
    })),
  );
