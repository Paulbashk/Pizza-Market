// assets
import * as S from './styled';

interface ModalContentProps {
  title: string;
  desc: string;
}

export const ModalContent = ({ title, desc }: ModalContentProps) => (
  <S.Content>
    <h3>{title}</h3>
    <p>{desc}</p>
  </S.Content>
);
