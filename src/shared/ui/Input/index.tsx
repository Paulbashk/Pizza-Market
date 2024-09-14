import {
  type Ref,
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
} from 'react';

// assets
import * as S from './styled';

interface IInputProps extends ComponentPropsWithoutRef<'input'> {
  message?: ReactNode | string | undefined | null;
  isError?: boolean;
}

export const Input = forwardRef(
  (
    { message, className, isError = false, ...props }: IInputProps,
    ref?: Ref<HTMLInputElement>,
  ) => (
    <S.InputControl $isError={isError} className={className}>
      <input {...props} ref={ref} aria-invalid={isError} />
      {message && message}
    </S.InputControl>
  ),
);
