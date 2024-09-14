/* eslint-disable jsx-a11y/label-has-associated-control */

import {
  type ReactElement,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type Ref,
  forwardRef,
} from 'react';

// assets
import * as S from './styled';

interface ICheckboxProps extends ComponentPropsWithoutRef<'input'> {
  labelText?: ReactNode | string | ReactElement;
  isError?: boolean;
}

export const Checkbox = forwardRef(
  (
    { labelText, className, isError = false, ...props }: ICheckboxProps,
    ref?: Ref<HTMLInputElement>,
  ) => (
    <S.CheckboxControl $isError={isError} className={className}>
      <input type="checkbox" {...props} ref={ref} />
      <span />
      {labelText && labelText}
    </S.CheckboxControl>
  ),
);
