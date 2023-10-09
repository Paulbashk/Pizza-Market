import React, { ComponentPropsWithoutRef } from 'react';
import * as S from './styled';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const Container = ({ children, ...otherProps }: ContainerProps) => (
  <S.Container {...otherProps}>
    <S.Row>{children}</S.Row>
  </S.Container>
);

export default Container;
