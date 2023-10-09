import React from 'react';
import { StaticImageData } from 'next/image';
import * as S from './styled';

interface LogoProps {
  logoImg: StaticImageData;
}

const Logo = ({ logoImg }: LogoProps) => (
  <S.LogoLink href="/">
    <S.LogoImage src={logoImg} alt="Logotype" priority={false} />
    <S.LogoWrapper>
      <S.LogoName>SUPER PIZZA</S.LogoName>
      <S.LogoDesc>очень вкусная пицца</S.LogoDesc>
    </S.LogoWrapper>
  </S.LogoLink>
);

export default Logo;
