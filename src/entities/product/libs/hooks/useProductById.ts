import { type EntityId } from '@reduxjs/toolkit';
import { type AppState } from '@/app/_root/store';
import { useSelector } from 'react-redux';
import { byId } from '../../model/selectors';
import { transformOptions, calcSumOptions } from '../utils';
import { type Product } from '../../model/types';

export type TUseProductByIdReturn = {
  price: {
    total: number;
    options: Product.TransformOption | undefined;
  };
  defaultPrice: number;
  image: string;
  title: string;
  isOptions: boolean;
  options: Product.Options[] | undefined;
};

type TUseProductById = (id: EntityId) => TUseProductByIdReturn;

export const useProductById: TUseProductById = id => {
  const {
    price: defaultPrice,
    image,
    title,
    options,
  } = useSelector((state: AppState) => byId(state, id))!;

  const defaultOptions = options && transformOptions(options);

  const sumPriceOptions = defaultOptions && calcSumOptions(defaultOptions);

  const transformPrice = {
    total:
      sumPriceOptions !== undefined
        ? defaultPrice + sumPriceOptions
        : defaultPrice,
    options: defaultOptions,
  };

  return {
    price: transformPrice,
    defaultPrice,
    image,
    title,
    isOptions: options !== undefined && options.length > 0,
    options,
  };
};
