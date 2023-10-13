import React from 'react';

// assets
import * as S from './styled';

interface SlideImageProps {
  image: string;
}

const SlideImage = ({ image }: SlideImageProps) => (
  <S.BannerImage src={image} alt="Image" width={1140} height={420} />
);

export default React.memo(SlideImage);
