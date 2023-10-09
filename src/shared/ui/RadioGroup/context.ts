import { type ChangeEvent, createContext } from 'react';

export interface RadioGroupContextValue {
  name: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(
  undefined,
);

export default RadioGroupContext;
