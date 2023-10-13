import React, { useState } from 'react';

// types
import type { IBanner } from '@/shared/types/interfaces';

// components
import { Modal, ModalOverlay, ModalWindow } from '@/shared/ui';
import { SlideImage, ModalContent } from '@/modules/banners/ui';

// assets
import * as S from './styled';

interface BannerSlideProps {
  item: IBanner;
}

const BannerSlide = ({ item }: BannerSlideProps) => {
  const { image, title, desc } = item;
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <S.Banner onClick={handleOpenModal}>
        <SlideImage image={image} />
      </S.Banner>
      {openModal && (
        <Modal
          isOpen={openModal}
          onEscapeKeydown={handleOpenModal}
          aria-label={title}
        >
          <ModalOverlay onClick={handleOpenModal} />
          <ModalWindow>
            <S.ModalClose>
              <S.CloseIcon onClick={handleOpenModal} />
            </S.ModalClose>
            <ModalContent title={title} desc={desc} />
          </ModalWindow>
        </Modal>
      )}
    </>
  );
};

export default BannerSlide;
