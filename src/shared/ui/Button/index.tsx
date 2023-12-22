import { memo, type ComponentPropsWithoutRef, type ReactNode } from 'react';

// assets
import * as S from './styled';

export enum ButtonColors {
  gray = 'gray',
  transparent = 'transparent',
}

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color: ButtonColors;
  isActive: boolean;
  children: ReactNode;
}

const StyleButtonMemo = memo(S.Button);

export const Button = ({ isActive, color, ...props }: ButtonProps) => {
  const { children, ...otherProps } = props;

  return (
    <StyleButtonMemo
      type={props.type ? 'button' : 'submit'}
      $color={color}
      $active={isActive}
      role="button"
      {...otherProps}
    >
      {children}
    </StyleButtonMemo>
  );
};
