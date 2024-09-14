'use client';

import { memo } from 'react';

// types
import type { IBanner } from '@/shared/types/interfaces';

// hooks
import { useModal } from '../../libs/hooks';

// components
import { SlideImage } from '../SlideImage';
import { BannerModal } from '../BannerModal';

interface IBannerSlideProps {
  item: IBanner;
}

const SlideImageMemo = memo(SlideImage);
const BannerModalMemo = memo(BannerModal);

export const BannerSlide = ({
  item: { image, title, desc },
}: IBannerSlideProps) => {
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
