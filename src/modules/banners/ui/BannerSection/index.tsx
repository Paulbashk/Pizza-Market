// types
import type { IBanner } from '@/shared/types/interfaces';

// components
import { BannerSlider } from '@/entities/banners-slider';

// assets
import * as S from './styled';

interface BannerSectionProps {
  banners: IBanner[];
}

export function BannerSection({ banners }: BannerSectionProps) {
  return (
    <S.Section name="promo">
      <BannerSlider banners={banners} />
    </S.Section>
  );
}
