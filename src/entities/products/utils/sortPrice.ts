import { type Products } from '@/entities/products/services/products';
import transformOptions from './transformOptions';
import calcSumOptions from './calcSumOptions';

const sortPrice = <T extends Products.Item>(type: 'ASC' | 'DESC', items: T[]) =>
  items.sort((a: T, b: T) => {
    const optionsPrice = (options: Products.Options[]): number =>
      calcSumOptions(transformOptions(options));

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
