import { useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return { isOpenModal, handleModal };
};
