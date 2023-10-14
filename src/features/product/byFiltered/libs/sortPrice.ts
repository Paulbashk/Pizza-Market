import { productLibs, type ProductTypes } from '@/entities/product';

const sortPrice = <T extends ProductTypes.Item>(
  type: 'ASC' | 'DESC',
  items: T[],
) =>
  items.sort((a: T, b: T) => {
    const optionsPrice = (options: ProductTypes.Options[]): number =>
      productLibs.calcSumOptions(productLibs.transformOptions(options));

    const optionsTotalPrice = {
      a: a.options ? optionsPrice(a.options) : 0,
      b: b.options ? optionsPrice(b.options) : 0,
    };

    const prices = {
      a: optionsTotalPrice.a + a.price,
      b: optionsTotalPrice.b + b.price,
    };

    return type === 'ASC' ? prices.a - prices.b : prices.b - prices.a;
  });

export default sortPrice;
