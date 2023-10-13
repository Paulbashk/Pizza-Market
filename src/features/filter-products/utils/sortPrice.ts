import { type Product, productUtils } from '@/entities/product';

const sortPrice = <T extends Product.Item>(type: 'ASC' | 'DESC', items: T[]) =>
  items.sort((a: T, b: T) => {
    const optionsPrice = (options: Product.Options[]): number =>
      productUtils.calcSumOptions(productUtils.transformOptions(options));

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
