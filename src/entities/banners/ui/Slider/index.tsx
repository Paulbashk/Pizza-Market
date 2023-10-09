import React from 'react';
import { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper as SwiperCore } from 'swiper/types';
import { SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

// services
import { bannerSelect } from '@/entities/banners/services/banners';

// Components
import { Slider } from '@/shared/ui';
import { Slide } from '@/entities/banners/ui';

// assets
import * as S from './styled';

const BannerSlider = () => {
  const bannerList = useSelector(bannerSelect.getIds);
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
        {bannerList.map(id => (
          <SwiperSlide key={Number(id)} virtualIndex={Number(id)}>
            <Slide id={id} />
          </SwiperSlide>
        ))}
      </Slider>
      <S.ArrowButtonLeft onClick={() => swiperRef.current?.slidePrev()} />
      <S.ArrowButtonRight onClick={() => swiperRef.current?.slideNext()} />
    </>
  );
};

export default BannerSlider;
