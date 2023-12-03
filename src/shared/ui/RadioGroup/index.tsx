'use client';

import { type ComponentPropsWithoutRef, type ChangeEvent } from 'react';
import { RadioGroupContext } from './context';
import { useRadioGroupValue } from './hooks';

type PropsWithout = ComponentPropsWithoutRef<'div'> & {
  onChange?: (event: ChangeEvent<HTMLInputElement>, value?: string) => void;
};

interface RadioGroupProps extends PropsWithout {
  onChange?: (event: ChangeEvent<HTMLInputElement>, value?: string) => void;
  defaultValue: string | number;
  name?: string;
}

export const RadioGroup = ({
  onChange,
  defaultValue,
  name: propName,
  children,
  ...otherProps
}: RadioGroupProps) => {
  const contextValue = useRadioGroupValue({
    defaultValue,
    propName,
    onChange,
  });

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div role="radiogroup" {...otherProps}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};
