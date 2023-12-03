'use client';

import { memo } from 'react';

// hooks
import { useModal } from '@/entities/banners-slider/libs/hooks';

// types
import type { IBanner } from '@/shared/types/interfaces';

// components
import { SlideImage } from '@/entities/banners-slider/ui/SlideImage';
import { BannerModal } from '@/entities/banners-slider/ui/BannerModal';

interface BannerSlideProps {
  item: IBanner;
}

const SlideImageMemo = memo(SlideImage);
const BannerModalMemo = memo(BannerModal);

export const BannerSlide = ({ item }: BannerSlideProps) => {
  const { image, title, desc } = item;
  const { isOpenModal, handleModal } = useModal();

  return (
    <div>
      <SlideImageMemo image={image} handleClick={handleModal} />
      <BannerModalMemo
        isOpenModal={isOpenModal}
        handleModal={handleModal}
        title={title}
        desc={desc}
      />
    </div>
  );
};
