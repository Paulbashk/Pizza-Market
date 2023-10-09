import React, { ComponentPropsWithoutRef } from 'react';
import * as S from './styled';

interface ErrorProps extends ComponentPropsWithoutRef<'p'> {
  children: React.ReactNode;
}

const Error = ({ children, ...otherProps }: ErrorProps) => (
  <S.Error {...otherProps}>{children}</S.Error>
);

export default Error;
