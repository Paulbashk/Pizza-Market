import React from 'react';
import { StaticImageData } from 'next/image';

// assets
import * as S from './styled';

interface SlideImageProps {
  image: StaticImageData;
}

const SlideImage = ({ image }: SlideImageProps) => (
  <S.BannerImage src={image} alt="Image" width={0} height={0} />
);

export default React.memo(SlideImage);
