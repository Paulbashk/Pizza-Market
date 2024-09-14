import * as S from './styled';

interface IBasketEmptyMessageProps {
  message: string;
}

export const BasketEmptyMessage = ({ message }: IBasketEmptyMessageProps) => (
  <S.Message>{message}</S.Message>
);
