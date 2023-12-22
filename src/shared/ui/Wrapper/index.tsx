import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import * as S from './styled';

interface WrapperProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export const Wrapper = ({
  children,
  className,
  ...otherProps
}: WrapperProps) => (
  <S.Wrapper
    className={className ? ['wrapper', className].join(' ') : 'wrapper'}
    {...otherProps}
  >
    {children}
  </S.Wrapper>
);
