import { type SetStateAction, useCallback } from 'react';
import { findIndexByKeyObject } from '@/shared/libs/utils';
import { type Product } from '../../model/types';
import { type IProductCardState } from '../../ui/ProductCard/types';
import { calcSumOptions } from '../utils';
import { productBasketUtils } from '../../@x/product-basket';

const { calcPriceWithSale } = productBasketUtils;

interface IUseSelectProductOptionProps {
  isOptions: boolean;
  options: Product.Options[] | undefined;
  defaultTotal: Product.PriceTotal;
  sale: Product.Sale;
  setPrice: (value: SetStateAction<IProductCardState>) => void;
}

type TUseSelectProductOptionReturn = (
  optionId: number,
  selected: string,
) => void;

type TUseSelectProductOption = (
  props: IUseSelectProductOptionProps,
) => TUseSelectProductOptionReturn;

export const useSelectProductOption: TUseSelectProductOption = ({
  isOptions,
  options,
  sale,
  defaultTotal,
  setPrice,
}) =>
  useCallback(
    (optionId: number, selected: string) => {
      if (!isOptions) return;

      const { items, name } = options![optionId];

      // Выбранный вариант опции
      const selectedOptionId = findIndexByKeyObject(items, 'label', selected);
      const selectedOption = items[selectedOptionId];

      setPrice(currentState => {
        const updateOptions = {
          ...currentState.options,
          [name]: selectedOption,
        };

        return sale
          ? {
              total: {
                count: defaultTotal.count + calcSumOptions(updateOptions),
                saleCount:
                  defaultTotal.saleCount +
                  calcPriceWithSale(calcSumOptions(updateOptions), sale),
              },
              options: updateOptions,
            }
          : {
              total: {
                count: defaultTotal.count + calcSumOptions(updateOptions),
                saleCount: 0,
              },
              options: updateOptions,
            };
      });
    },
    [options],
  );
