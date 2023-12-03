import { useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';

export const useSlider = () => {
  const swiperRef = useRef<SwiperCore>();

  const hanldePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();
  const beforeInit = (Swiper: SwiperCore) => {
    swiperRef.current = Swiper;
  };

  return {
    swiper: swiperRef.current,
    arrows: {
      prev: hanldePrev,
      next: handleNext,
    },
    beforeInit,
  };
};
