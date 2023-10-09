import React, { useState } from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// services
import { bannerSelect } from '@/entities/banners/services/banners';

// components
import { Modal, ModalOverlay, ModalWindow } from '@/shared/ui';
import { SlideImage, ModalContent } from '@/entities/banners/ui';

// assets
import * as S from './styled';

interface SlideProps {
  id: EntityId;
}

const Slide = ({ id }: SlideProps) => {
  const { image, title, desc } = useSelector(bannerSelect.getById(id));
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

export default Slide;
