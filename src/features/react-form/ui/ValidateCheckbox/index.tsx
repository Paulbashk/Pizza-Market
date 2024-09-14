import { ReactNode, type ComponentPropsWithoutRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

// components
import { Checkbox } from '@/shared/ui';

interface IValidateCheckboxProps extends ComponentPropsWithoutRef<'input'> {
  name: string;
  requiredText?: string;
  labelText?: ReactNode | string;
}

export const ValidateCheckbox = ({
  name,
  requiredText,
  labelText,
  ...otherProps
}: IValidateCheckboxProps) => {
  const {
    control,
    formState: { errors, isSubmitted },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: requiredText,
      }}
      render={({ field }) => (
        <Checkbox
          key={field.name}
          isError={errors[name] && isSubmitted}
          {...otherProps}
          labelText={labelText}
          {...field}
        />
      )}
    />
  );
};
