import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import * as S from './styled';

interface WrapperProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export const Wrapper = ({ children, ...otherProps }: WrapperProps) => (
  <S.Wrapper {...otherProps}>{children}</S.Wrapper>
);
