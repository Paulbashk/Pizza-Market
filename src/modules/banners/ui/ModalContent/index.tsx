import React from 'react';

// assets
import * as S from './styled';

interface ModalContentProps {
  title: string;
  desc: string;
}

const ModalContent = ({ title, desc }: ModalContentProps) => (
  <S.ModalContent>
    <h3>{title}</h3>
    <p>{desc}</p>
  </S.ModalContent>
);

export default React.memo(ModalContent);
