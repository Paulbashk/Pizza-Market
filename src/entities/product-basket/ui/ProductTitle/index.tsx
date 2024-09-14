// assets
import * as S from './styled';

interface IProductTitleProps {
  title: string;
  desc?: string;
}

export const ProductTitle = ({ title, desc }: IProductTitleProps) => (
  <S.WrapperInfo>
    <S.Title>{title}</S.Title>
    {desc && <p>{desc}</p>}
  </S.WrapperInfo>
);
