import React, { ComponentPropsWithoutRef } from 'react';
import * as S from './styled';

export enum ButtonColors {
  gray = 'gray',
  transparent = 'transparent',
}

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color: ButtonColors;
  isActive: boolean;
  children: React.ReactNode;
}

function Button({ isActive, color, ...props }: ButtonProps) {
  const { children, ...otherProps } = props;

  return (
    <S.Button
      type={props.type ? 'button' : 'submit'}
      $color={color}
      $active={isActive}
      role="button"
      {...otherProps}
    >
      {children}
    </S.Button>
  );
}

export default Button;
