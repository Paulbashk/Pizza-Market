// interfaces
import type { ILogo } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface LogoProps {
  logo: ILogo;
}

export const Logo = ({ logo }: LogoProps) => {
  const { src, name, subdesc } = logo;

  return (
    <S.LogoLink href="/" scroll={false}>
      <S.LogoImage src={src} alt="Logotype" width={70} height={70} />
      <S.LogoWrapper>
        <S.LogoName>{name}</S.LogoName>
        <S.LogoDesc>{subdesc}</S.LogoDesc>
      </S.LogoWrapper>
    </S.LogoLink>
  );
};
