import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as S from './styled';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export const Container = ({ children, ...otherProps }: ContainerProps) => (
  <S.Container {...otherProps}>
    <S.Row>{children}</S.Row>
  </S.Container>
);
