// assets
import * as S from './styled';

interface IContentTitleProps {
  title: string;
}

export const ContentTitle = ({ title }: IContentTitleProps) => (
  <S.WrapperTitle>
    <S.TitleIcon />
    <S.Title>{title}</S.Title>
  </S.WrapperTitle>
);
