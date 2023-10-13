import React, { ComponentPropsWithoutRef } from 'react';
import * as S from './styled';

interface SortedLabelProps extends ComponentPropsWithoutRef<'div'> {
  label: string | React.ReactNode;
  isActive?: boolean;
}

function SortedLabel(props: SortedLabelProps) {
  const { label, isActive, ...otherProps } = props;

  return (
    <S.Label {...otherProps}>
      <S.ArrowIcon $active={isActive ?? false} />
      Сортировка по:
      <S.Selected>{label}</S.Selected>
    </S.Label>
  );
}

export default SortedLabel;
