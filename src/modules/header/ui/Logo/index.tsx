import React from 'react';

// interfaces
import type { ILogo } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface LogoProps {
  logo: ILogo;
}

const Logo = ({ logo }: LogoProps) => {
  const { src, name, subdesc } = logo;

  return (
    <S.LogoLink href="/">
      <S.LogoImage src={src} alt="Logotype" width={70} height={70} />
      <S.LogoWrapper>
        <S.LogoName>{name}</S.LogoName>
        <S.LogoDesc>{subdesc}</S.LogoDesc>
      </S.LogoWrapper>
    </S.LogoLink>
  );
};

export default Logo;
