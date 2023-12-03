'use client';

// modules
import { type ReactNode } from 'react';
import SwiperCore, { Virtual, SwiperOptions } from 'swiper';
import { Swiper } from 'swiper/react';

// swiper styles
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

interface SliderProps extends SwiperOptions {
  children: ReactNode;
  onBeforeInit?: (Swiper: SwiperCore) => void;
}

export const Slider = (props: SliderProps) => {
  const { children, modules, navigation, ...otherProps } = props;

  return (
    <Swiper
      modules={modules ? [Virtual, ...modules] : [Virtual]}
      navigation={navigation}
      virtual
      {...otherProps}
    >
      {children}
    </Swiper>
  );
};
