import { type MouseEvent, memo } from 'react';

// assets
import * as S from './styled';

interface ISlideImageProps {
  image: string;
  handleClick: (event?: MouseEvent) => void;
}

const Image = memo(S.BannerImage);

export const SlideImage = ({ image, handleClick }: ISlideImageProps) => (
  <S.Wrapper onClick={handleClick}>
    <Image src={image} alt="Image" fill priority />
  </S.Wrapper>
);
