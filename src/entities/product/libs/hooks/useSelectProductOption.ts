import { type Product } from '@/entities/product/model/types';
import { type SetStateAction, useCallback } from 'react';
import { type ProductCardState } from '@/entities/product/ui/ProductCard/types';
import { calcSumOptions } from '@/entities/product/libs/utils';

interface UseParams {
  isOptions: boolean;
  options: Product.Options[] | undefined;
  defaultPrice: number;
  setProduct: (value: SetStateAction<ProductCardState>) => void;
}

export const useSelectProductOption = ({
  isOptions,
  options,
  defaultPrice,
  setProduct,
}: UseParams) =>
  useCallback((optionId: number, selected: string) => {
    if (!isOptions) return;

    const { items, name } = options![optionId];

    // Выбранный вариант опции
    const selectedOption =
      items[items.findIndex(radio => radio.label === selected)];

    setProduct(currentState => {
      const updateOptions = {
        ...currentState.options,
        [name]: selectedOption,
      };

      return {
        total: defaultPrice + calcSumOptions(updateOptions),
        options: updateOptions,
      };
    });
  }, []);
