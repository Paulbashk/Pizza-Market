import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as S from './styled';

interface IContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export const Container = ({
  children,
  className,
  ...otherProps
}: IContainerProps) => (
  <S.Container
    className={className ? ['container', className].join(' ') : 'container'}
    {...otherProps}
  >
    <S.Row className="row">{children}</S.Row>
  </S.Container>
);
