import Image from 'next/image';

// assets
import * as S from './styled';

interface ProductCardImageProps {
  image: string;
  title: string;
}

export const ProductCardImage = ({ image, title }: ProductCardImageProps) => (
  <S.WrapperImage>
    <Image
      src={image}
      alt={title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </S.WrapperImage>
);
