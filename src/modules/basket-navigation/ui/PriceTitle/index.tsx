// assets
import * as S from './styled';

interface IPriceTitleProps {
  title: string;
}

export const PriceTitle = ({ title }: IPriceTitleProps) => (
  <S.Title>{title}</S.Title>
);
