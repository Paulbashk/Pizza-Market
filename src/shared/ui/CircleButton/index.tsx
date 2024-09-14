import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  type Ref,
  forwardRef,
} from 'react';

// assets
import * as S from './styled';

export enum CircleButtonColors {
  orange = 'orange',
  gray = 'gray',
}

interface ICircleButtonProps extends ComponentPropsWithoutRef<'button'> {
  color: CircleButtonColors;
  children: ReactNode;
}

export const CircleButton = forwardRef(
  ({ color, ...props }: ICircleButtonProps, ref?: Ref<HTMLButtonElement>) => {
    const { children, ...otherProps } = props;

    return (
      <S.CircleButton
        type={otherProps.type ? 'button' : 'submit'}
        $color={color}
        role="button"
        ref={ref}
        {...otherProps}
      >
        {children}
      </S.CircleButton>
    );
  },
);
