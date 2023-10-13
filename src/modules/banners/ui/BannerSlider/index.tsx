import React from 'react';
import { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper as SwiperCore } from 'swiper/types';
import { SwiperSlide } from 'swiper/react';

// services
import { Slider } from '@/shared/ui';

// Components
import { BannerSlide } from '@/modules/banners/ui';

// interface
import { IBanner } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface BannerSliderProps {
  banners: IBanner[];
}

const BannerSlider = ({ banners }: BannerSliderProps) => {
  const swiperRef = React.useRef<SwiperCore>();

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
        onBeforeInit={(Swiper: SwiperCore) => {
          swiperRef.current = Swiper;
        }}
      >
        {banners.map(item => (
          <SwiperSlide key={Number(item.id)} virtualIndex={Number(item.id)}>
            <BannerSlide item={item} />
          </SwiperSlide>
        ))}
      </Slider>
      <S.ArrowButtonLeft onClick={() => swiperRef.current?.slidePrev()} />
      <S.ArrowButtonRight onClick={() => swiperRef.current?.slideNext()} />
    </>
  );
};

export default BannerSlider;
