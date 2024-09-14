// assets
import * as S from './styled';

interface IModalContentProps {
  title: string;
  desc: string;
}

export const ModalContent = ({ title, desc }: IModalContentProps) => (
  <S.Content>
    <h3>{title}</h3>
    <p>{desc}</p>
  </S.Content>
);
