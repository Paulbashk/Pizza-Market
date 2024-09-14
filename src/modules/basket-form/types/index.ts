import { type RegisterOptions } from 'react-hook-form';
import { type TFormGroupSizes } from '@/entities/block-form';
import { ComponentPropsWithoutRef } from 'react';

interface IInputGroupElement extends ComponentPropsWithoutRef<'input'> {
  name: string;
  type: string;
  placeholder: string;
  message: null | string;
  rules: RegisterOptions;
  isPhoneMask?: boolean;
}

export interface IInputGroup {
  name: string;
  size: TFormGroupSizes;
  elements: IInputGroupElement[];
}
