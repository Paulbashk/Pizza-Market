import { type ComponentPropsWithoutRef } from 'react';

// components
import { Button, ButtonColors } from '@/shared/ui';

interface IValidateButtonProps extends ComponentPropsWithoutRef<'button'> {
  isActive: boolean;
  color: ButtonColors;
  nameButton: string | null;
  isValidButton: boolean;
}

export const ValidateButton = ({
  isActive,
  isValidButton,
  color,
  nameButton,
  ...otherProps
}: IValidateButtonProps) => (
  <Button
    type="submit"
    disabled={isValidButton}
    isActive={isActive}
    color={color}
    {...otherProps}
  >
    {nameButton}
  </Button>
);
