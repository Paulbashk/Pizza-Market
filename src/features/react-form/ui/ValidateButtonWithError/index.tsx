import { type ReactNode, type ComponentPropsWithoutRef, memo } from 'react';
import {
  type FieldError,
  useFormContext,
  type Merge,
  type FieldErrorsImpl,
} from 'react-hook-form';

// components
import { ButtonColors } from '@/shared/ui';
import { ValidateButton } from '../ValidateButton';

type TErrorMessage =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>;

interface IValidateButtonWithErrorProps
  extends ComponentPropsWithoutRef<'div'> {
  isActive: boolean;
  nameError: string;
  renderError?: (errorMsg?: TErrorMessage) => ReactNode | string;
  color: ButtonColors;
  nameButton: string | null;
}

const ValidateButtonMemo = memo(ValidateButton);

export const ValidateButtonWithError = ({
  nameButton,
  nameError,
  renderError,
  isActive,
  color,
  ...otherProps
}: IValidateButtonWithErrorProps) => {
  const {
    formState: { isSubmitted, isValid, errors },
  } = useFormContext();

  const isValidButton = isSubmitted === true ? !isValid : false;

  return (
    <div {...otherProps}>
      <ValidateButtonMemo
        isActive={isActive}
        color={color}
        nameButton={nameButton}
        isValidButton={isValidButton}
      />
      {errors[nameError] &&
        isSubmitted &&
        renderError &&
        renderError(errors[nameError]?.message)}
    </div>
  );
};
