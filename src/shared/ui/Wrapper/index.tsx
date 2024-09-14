import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import * as S from './styled';

interface IWrapperProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export const Wrapper = ({
  children,
  className,
  ...otherProps
}: IWrapperProps) => (
  <S.Wrapper
    className={className ? ['wrapper', className].join(' ') : 'wrapper'}
    {...otherProps}
  >
    {children}
  </S.Wrapper>
);
