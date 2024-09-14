'use client';

import { type ChangeEvent, createContext } from 'react';

export interface IRadioGroupContextValue {
  name: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

export const RadioGroupContext = createContext<
  IRadioGroupContextValue | undefined
>(undefined);
