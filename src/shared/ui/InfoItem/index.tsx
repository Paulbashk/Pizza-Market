import { type ComponentPropsWithoutRef } from 'react';

// assets
import * as S from './styled';

interface IInfoItemProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  value: string;
  throughValue?: string;
}

export const InfoItem = ({
  title,
  value,
  throughValue,
  ...otherProps
}: IInfoItemProps) => (
  <S.Item {...otherProps}>
    <p>{title}</p>
    {throughValue && <span>{throughValue}</span>}
    <p>
      <strong>{value}</strong>
    </p>
  </S.Item>
);
