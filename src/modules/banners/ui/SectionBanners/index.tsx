import React from 'react';

// components
import Banners from '@/entities/banners';

// assets
import * as S from './styled';

function SectionBanners() {
  return (
    <S.SectionBanner name="promo">
      <Banners />
    </S.SectionBanner>
  );
}

export default SectionBanners;
