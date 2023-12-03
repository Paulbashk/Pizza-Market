/* eslint-disable jsx-a11y/no-redundant-roles */

'use client';

import { memo, type ComponentPropsWithoutRef, type ReactNode } from 'react';

// hooks
import { useRadioButtonState, useChainedOnChange } from './hooks';

// assets
import * as S from './styled';

export enum RadioColors {
  gray = 'gray',
}

export interface RadioProps extends ComponentPropsWithoutRef<'input'> {
  value: string | number;
  id?: string;
  label?: ReactNode;
  color?: RadioColors;
}

export const RadioButton = memo(
  ({
    id,
    label,
    value,
    onChange,
    checked: propChecked,
    name: nameProp,
    color = RadioColors.gray,
    ...otherProps
  }: RadioProps) => {
    const { radioGroup, radioId, checked, name } = useRadioButtonState({
      id,
      propChecked,
      nameProp,
      value,
    });

    const chainedFunctions = useChainedOnChange({
      chained: radioGroup?.onChange,
      onChange,
    });

    return (
      <S.RadioGroup $color={color} role="button" aria-label="radio-button">
        <input
          type="radio"
          role="radio"
          aria-checked={checked}
          aria-labelledby={radioId.current}
          id={radioId.current}
          value={value}
          checked={checked}
          name={name}
          onChange={chainedFunctions}
          {...otherProps}
        />
        {(label || (typeof label === 'string' && label.length < 0)) && (
          <label htmlFor={radioId.current}>{label}</label>
        )}
      </S.RadioGroup>
    );
  },
);
