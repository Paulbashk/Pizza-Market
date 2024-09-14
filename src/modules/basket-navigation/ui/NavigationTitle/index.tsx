// assets
import * as S from './styled';

interface INavigationTitleProps {
  title: string;
}

export const NavigationTitle = ({ title }: INavigationTitleProps) => (
  <S.Title>{title}</S.Title>
);
