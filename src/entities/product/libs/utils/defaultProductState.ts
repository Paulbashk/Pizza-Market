import { type Product } from '../../model/types';
import { productBasketUtils } from '../../@x/product-basket';
import { transformOptionsPriceWithSale } from './transformOptionsPriceWithSale';

const { calcPriceWithSale } = productBasketUtils;

type TDefaultProductStateProps = {
  total: number;
  options: Product.TransformOption | undefined;
  sale: Product.Sale;
};

type TDefaultProductState = (props: TDefaultProductStateProps) => {
  total: {
    count: number;
    saleCount: number;
  };
  options: Product.TransformOption | undefined;
};

export const defaultProductState: TDefaultProductState = ({
  total,
  options,
  sale,
}) =>
  sale
    ? {
        total: {
          count: total,
          saleCount: calcPriceWithSale(total, sale),
        },
        options: options && transformOptionsPriceWithSale(options, sale),
      }
    : {
        total: {
          count: total,
          saleCount: 0,
        },
        options,
      };
