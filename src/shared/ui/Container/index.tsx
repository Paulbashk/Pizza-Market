import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as S from './styled';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export const Container = ({
  children,
  className,
  ...otherProps
}: ContainerProps) => (
  <S.Container
    className={className ? ['container', className].join(' ') : 'container'}
    {...otherProps}
  >
    <S.Row className="row">{children}</S.Row>
  </S.Container>
);
