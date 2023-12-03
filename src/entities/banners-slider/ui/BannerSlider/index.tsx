'use client';

import { Autoplay, EffectCoverflow } from 'swiper';
import { SwiperSlide } from 'swiper/react';

// hooks
import { useSlider } from '@/entities/banners-slider/libs/hooks';

// Components
import { Slider } from '@/shared/ui';
import { BannerSlide } from '@/entities/banners-slider/ui/BannerSlide';

// interface
import { type IBanner } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface BannerSliderProps {
  banners: IBanner[];
}

export const BannerSlider = ({ banners }: BannerSliderProps) => {
  const { arrows, beforeInit } = useSlider();

  return (
    <>
      <Slider
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        slidesPerView={1}
        rewind
        autoplay={{
          delay: 7000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        onBeforeInit={beforeInit}
      >
        {banners.map(item => (
          <SwiperSlide key={item.id} virtualIndex={item.id}>
            <BannerSlide item={item} />
          </SwiperSlide>
        ))}
      </Slider>
      <S.ArrowButtonLeft onClick={arrows.prev} />
      <S.ArrowButtonRight onClick={arrows.next} />
    </>
  );
};
