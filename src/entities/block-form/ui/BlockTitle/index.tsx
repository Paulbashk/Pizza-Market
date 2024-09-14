// assets
import * as S from './styled';

interface IBlockTitleProps {
  title: string;
}

export const BlockTitle = ({ title }: IBlockTitleProps) => (
  <S.Title>{title}</S.Title>
);
