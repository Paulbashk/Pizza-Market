import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  type Ref,
  forwardRef,
} from 'react';
import Link from 'next/link';

// assets
import * as S from './styled';

export enum ButtonColors {
  gray = 'gray',
  transparent = 'transparent',
  yellow = 'yellow',
}

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  color: ButtonColors;
  isActive: boolean;
  children: ReactNode;
}

export const Button = forwardRef(
  (
    { isActive, color, ...props }: IButtonProps,
    ref?: Ref<HTMLButtonElement>,
  ) => {
    const { children, ...otherProps } = props;

    return (
      <S.Button
        type={props.type ? 'button' : 'submit'}
        $color={color}
        $active={isActive}
        role="button"
        ref={ref}
        {...otherProps}
      >
        {children}
      </S.Button>
    );
  },
);

interface ButtonLinkProps extends IButtonProps {
  href: string;
}

export const ButtonLink = ({ href, children, ...props }: ButtonLinkProps) => (
  <Link href={href} passHref legacyBehavior>
    <Button {...props}>{children}</Button>
  </Link>
);
