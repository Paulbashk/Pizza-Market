import { type MouseEvent, memo } from 'react';

// assets
import * as S from './styled';

interface SlideImageProps {
  image: string;
  handleClick: (event?: MouseEvent) => void;
}

const Image = memo(S.BannerImage);

export const SlideImage = ({ image, handleClick }: SlideImageProps) => (
  <S.Wrapper onClick={handleClick}>
    <Image src={image} alt="Image" width={1140} height={420} priority />
  </S.Wrapper>
);
