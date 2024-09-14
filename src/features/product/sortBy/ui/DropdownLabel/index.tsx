import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

// assets
import * as S from './styled';

interface ISortedLabelProps extends ComponentPropsWithoutRef<'div'> {
  label: string | ReactNode;
  isActive?: boolean;
}

export function SortedLabel(props: ISortedLabelProps) {
  const { label, isActive, ...otherProps } = props;

  return (
    <S.Label {...otherProps}>
      <S.WrapperText>
        <S.ArrowIcon $active={isActive ?? false} />
        Сортировка по:
      </S.WrapperText>
      <S.Selected>{label}</S.Selected>
    </S.Label>
  );
}
