import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

// assets
import * as S from './styled';

export enum CircleButtonColors {
  orange = 'orange',
  gray = 'gray',
}

interface CircleButtonProps extends ComponentPropsWithoutRef<'button'> {
  color: CircleButtonColors;
  children: ReactNode;
}

export const CircleButton = ({ color, ...props }: CircleButtonProps) => {
  const { children, ...otherProps } = props;

  return (
    <S.CircleButton
      type={otherProps.type ? 'button' : 'submit'}
      $color={color}
      role="button"
      {...otherProps}
    >
      {children}
    </S.CircleButton>
  );
};
