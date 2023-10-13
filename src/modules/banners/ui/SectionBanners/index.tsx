import React from 'react';

// types
import type { IBanner } from '@/shared/types/interfaces';

// components
import { BannerSlider } from '@/modules/banners/ui';

// assets
import * as S from './styled';

interface SectionBannersProps {
  banners: IBanner[];
}

function SectionBanners({ banners }: SectionBannersProps) {
  return (
    <S.SectionBanner name="promo">
      <BannerSlider banners={banners} />
    </S.SectionBanner>
  );
}

export default SectionBanners;
