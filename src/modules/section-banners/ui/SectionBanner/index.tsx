// types
import type { IBanner } from '@/shared/types/interfaces';

// components
import { BannerSlider } from '@/entities/banner-slider';

// assets
import * as S from './styled';

interface ISectionBannerProps {
  banners: IBanner[];
}

export function SectionBanner({ banners }: ISectionBannerProps) {
  return (
    <S.Section name="promo">
      <BannerSlider banners={banners} />
    </S.Section>
  );
}
