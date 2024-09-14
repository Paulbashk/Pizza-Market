// assets
import * as S from './styled';

interface IButtonHamburgerProps {
  handleClick: () => void;
}

export const ButtonHamburger = ({ handleClick }: IButtonHamburgerProps) => (
  <S.Button onClick={handleClick}>
    <span />
  </S.Button>
);
