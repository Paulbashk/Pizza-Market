import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as S from './styled';

interface ErrorProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode;
}

export const Error = ({ children, ...otherProps }: ErrorProps) => (
  <S.Error {...otherProps}>{children}</S.Error>
);
