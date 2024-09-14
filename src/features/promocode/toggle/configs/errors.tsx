// components
import { Error } from '@/shared/ui';

export const ERRORS = {
  NOT_VALID_LENGTH: (length: number) => (
    <Error>Длина промокода должна быть больше {length} символов</Error>
  ),
  NOT_VALID: (code: string) => <Error>Промокод {code} не действителен</Error>,
  NOT_VALID_PRICE: (block_price: number, diff_price: number) => (
    <Error>
      Для активации промокода необходима сумма корзины на {block_price} ₽
      <br />
      <b>(вам не хватает {diff_price} ₽)</b>
    </Error>
  ),
} as const;
