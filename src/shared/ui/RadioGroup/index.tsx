'use client';

import {
  type ComponentPropsWithoutRef,
  type ChangeEvent,
  type Ref,
  forwardRef,
} from 'react';
import { RadioGroupContext } from './context';
import { useRadioGroupValue } from './hooks';

type TPropsWithout = ComponentPropsWithoutRef<'div'> & {
  onChange?: (event: ChangeEvent<HTMLInputElement>, value?: string) => void;
};

interface IRadioGroupProps extends TPropsWithout {
  onChange?: (event: ChangeEvent<HTMLInputElement>, value?: string) => void;
  defaultValue: string | number;
  name?: string;
}

export const RadioGroup = forwardRef(
  (
    {
      onChange,
      defaultValue,
      name: propName,
      children,
      ...otherProps
    }: IRadioGroupProps,
    ref?: Ref<HTMLDivElement>,
  ) => {
    const contextValue = useRadioGroupValue({
      defaultValue,
      propName,
      onChange,
    });

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div role="radiogroup" {...otherProps} ref={ref}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  },
);
