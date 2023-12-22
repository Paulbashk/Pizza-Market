import { type Product } from '@/entities/product/model/types';
import { type SetStateAction, useCallback } from 'react';
import { type ProductCardState } from '@/entities/product/ui/ProductCard/types';
import { calcSumOptions } from '@/entities/product/libs/utils';
import { findIndexByKeyObject } from '@/shared/libs/utils';

interface UseParams {
  isOptions: boolean;
  options: Product.Options[] | undefined;
  defaultPrice: number;
  setTotalPrice: (value: SetStateAction<ProductCardState>) => void;
}

export const useSelectProductOption = ({
  isOptions,
  options,
  defaultPrice,
  setTotalPrice,
}: UseParams) =>
  useCallback((optionId: number, selected: string) => {
    if (!isOptions) return;

    const { items, name } = options![optionId];

    // Выбранный вариант опции
    const selectedOptionId = findIndexByKeyObject(items, 'label', selected);
    const selectedOption = items[selectedOptionId];

    setTotalPrice(currentState => {
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
