import React, { ComponentPropsWithoutRef } from 'react';
import * as S from './styled';

interface WrapperProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const Wrapper = ({ children, ...otherProps }: WrapperProps) => (
  <S.Wrapper {...otherProps}>{children}</S.Wrapper>
);

export default Wrapper;
