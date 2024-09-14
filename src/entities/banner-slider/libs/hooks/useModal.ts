import { useState } from 'react';

type TUseModal = () => {
  isOpenModal: boolean;
  handleModal: () => void;
};

export const useModal: TUseModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return { isOpenModal, handleModal };
};
