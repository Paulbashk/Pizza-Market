import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

// assets
import * as S from './styled';

interface SortedLabelProps extends ComponentPropsWithoutRef<'div'> {
  label: string | ReactNode;
  isActive?: boolean;
}

export function SortedLabel(props: SortedLabelProps) {
  const { label, isActive, ...otherProps } = props;

  return (
    <S.Label {...otherProps}>
      <S.ArrowIcon $active={isActive ?? false} />
      Сортировка по:
      <S.Selected>{label}</S.Selected>
    </S.Label>
  );
}
