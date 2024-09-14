'use client';

import { Autoplay, EffectCoverflow } from 'swiper';
import { SwiperSlide } from 'swiper/react';

// types
import { type IBanner } from '@/shared/types/interfaces';

// hooks
import { Slider } from '@/shared/ui';
import { useSlider } from '../../libs/hooks';

// Components
import { BannerSlide } from '../BannerSlide';

// assets
import * as S from './styled';

interface IBannerSliderProps {
  banners: IBanner[];
}

export const BannerSlider = ({ banners }: IBannerSliderProps) => {
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
        {banners.map((item: IBanner) => (
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
