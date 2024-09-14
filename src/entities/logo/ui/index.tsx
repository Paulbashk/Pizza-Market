import Image from 'next/image';

// interfaces
import type { ILogo } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface ILogoProps {
  logo: ILogo;
}

export const Logo = ({ logo }: ILogoProps) => {
  const { src, name, subdesc } = logo;

  return (
    <S.LogoLink href="/" scroll={false}>
      <S.WrapperImage>
        <Image
          src={src}
          alt="Logotype"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </S.WrapperImage>
      <S.LogoWrapper>
        <S.LogoName>{name}</S.LogoName>
        <S.LogoDesc>{subdesc}</S.LogoDesc>
      </S.LogoWrapper>
    </S.LogoLink>
  );
};
