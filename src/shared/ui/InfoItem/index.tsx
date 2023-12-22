// assets
import * as S from './styled';

interface InfoItemProps {
  title: string;
  value: string;
}

export const InfoItem = ({ title, value }: InfoItemProps) => (
  <S.Item>
    <p>{title}</p>
    <p>
      <strong>{value}</strong>
    </p>
  </S.Item>
);
