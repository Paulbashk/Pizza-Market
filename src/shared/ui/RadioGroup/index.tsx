import React, { ComponentPropsWithoutRef } from 'react';
import { useGenerateId } from '@/shared/libs/hooks';
import RadioGroupContext from './context';

type PropsWithout = ComponentPropsWithoutRef<'div'> & {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value?: string,
  ) => void;
};

interface RadioGroupProps extends PropsWithout {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value?: string,
  ) => void;
  defaultValue: string | number;
  name?: string;
}

const RadioGroup = ({
  onChange,
  defaultValue,
  name: propName,
  children,
  ...otherProps
}: RadioGroupProps) => {
  const [value, setValue] = React.useState<string | number>(defaultValue);
  const { current: name } = useGenerateId(propName, true);

  const contextValue = React.useMemo(
    () => ({
      name,
      value,
      onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);

        if (onChange) {
          onChange(event, event.target.value);
        }
      },
    }),
    [name, onChange, setValue, value],
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div role="radiogroup" {...otherProps}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
