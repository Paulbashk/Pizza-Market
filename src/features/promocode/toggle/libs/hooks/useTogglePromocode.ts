import { useState, type RefObject, type ReactNode, useCallback } from 'react';

// types
import { type IPromocode } from '@/shared/types/interfaces';

// entities
import {
  productBasketHooks,
  productBasketModel,
} from '@/entities/product-basket';

// hooks
import { useAppDispatch } from '@/shared/libs/hooks';

// configs
import { ERRORS } from '../../configs';

const { usePrice } = productBasketHooks;

type TUseTogglePromocodeProps = {
  promocodes: IPromocode[] | undefined;
  onClick?: () => void;
};

type TUseTogglePromocodeReturn = {
  message: ReactNode;
  isActive: boolean;
  promocode: string | undefined;
  onPromocode: (inputRef: RefObject<HTMLInputElement>) => void;
};

type TUseTogglePromocode = (
  props: TUseTogglePromocodeProps,
) => TUseTogglePromocodeReturn;

export const useTogglePromocode: TUseTogglePromocode = ({
  promocodes,
  onClick,
}) => {
  const { count, sale, promocode: currentCode } = usePrice();
  const dispatch = useAppDispatch();

  const isSale = sale !== null;

  const [message, setMessage] = useState<string | ReactNode | undefined>(
    undefined,
  );

  const onPromocode = useCallback(
    (inputRef: RefObject<HTMLInputElement>) => {
      if (!inputRef) return;
      if (!inputRef.current) return;

      const code = inputRef.current.value;

      if (code === null) return;

      const upperCode = code.toUpperCase();

      // Нет активных скидок, промокодов:
      if (!isSale) {
        // Менее 4-ех символов
        if (upperCode.length <= 4) {
          return setMessage(ERRORS.NOT_VALID_LENGTH(4));
        }

        // Поиск промокода
        const promocode =
          promocodes &&
          promocodes.find(
            _promocode => _promocode.code.toUpperCase() === upperCode,
          );

        if (!promocode) {
          return setMessage(ERRORS.NOT_VALID(upperCode));
        }

        const { block_price: blockPrice } = promocode;

        // Проверка финансовых условий активации промокода
        if (count <= blockPrice) {
          const diffPrice = blockPrice - count;

          return setMessage(ERRORS.NOT_VALID_PRICE(blockPrice, diffPrice));
        }

        // Активация промокода
        dispatch(
          productBasketModel.actions.setPromocode({
            sale: promocode.sale,
            promocode,
          }),
        );
      } else {
        // Деактивация промокода
        dispatch(
          productBasketModel.actions.setPromocode({
            sale: null,
            promocode: null,
          }),
        );
      }

      if (onClick) {
        onClick();
      }
    },
    [message, setMessage, onClick, isSale],
  );

  return {
    message,
    isActive: isSale,
    promocode: currentCode?.code,
    onPromocode,
  };
};
