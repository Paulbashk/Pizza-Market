import Image from 'next/image';

// assets
import * as S from './styled';

interface IProductImageProps {
  image: string;
  title: string;
}

export const ProductImage = ({ image, title }: IProductImageProps) => (
  <S.WrapperImage>
    <Image
      src={image}
      alt={title}
      title={title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </S.WrapperImage>
);
