import { memo } from 'react';

// components
import { Modal, ModalOverlay, ModalWindow } from '@/shared/ui';
import { ModalContent } from '@/entities/banners-slider/ui/ModalContent';

// assets
import * as S from './styled';

const ModalContentMemo = memo(ModalContent);

interface BannerModalProps {
  isOpenModal: boolean;
  handleModal: () => void;
  title: string;
  desc: string;
}

export const BannerModal = ({
  isOpenModal,
  handleModal,
  title,
  desc,
}: BannerModalProps) => (
  <Modal isOpen={isOpenModal} onEscapeKeydown={handleModal} aria-label={title}>
    <ModalOverlay onClick={handleModal} />
    <ModalWindow>
      <S.ModalClose>
        <S.CloseIcon onClick={handleModal} />
      </S.ModalClose>
      <ModalContentMemo title={title} desc={desc} />
    </ModalWindow>
  </Modal>
);
