import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as S from './styled';

interface IErrorProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode;
}

export const Error = ({ children, ...otherProps }: IErrorProps) => (
  <S.Error {...otherProps}>{children}</S.Error>
);
