/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/no-redundant-roles */

'use client';

import {
  memo,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type Ref,
  forwardRef,
} from 'react';

// hooks
import { useRadioButtonState, useChainedOnChange } from './hooks';

// assets
import * as S from './styled';

export enum RadioSizes {
  min = 'min',
  large = 'large',
}

export enum RadioColors {
  gray = 'gray',
}

export interface IRadioProps extends ComponentPropsWithoutRef<'input'> {
  value: string | number;
  id?: string;
  label?: ReactNode;
  color?: RadioColors;
  sizeButton?: RadioSizes;
}

export const RadioButton = memo(
  forwardRef(
    (
      {
        id,
        label,
        value,
        onChange,
        checked: propChecked,
        name: nameProp,
        color = RadioColors.gray,
        sizeButton = RadioSizes.min,
        className,
        ...otherProps
      }: IRadioProps,
      ref?: Ref<HTMLInputElement>,
    ) => {
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
        <S.RadioGroup
          $sizeButton={sizeButton}
          $color={color}
          role="button"
          aria-label="radio-button"
          className={className}
        >
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
            ref={ref}
            {...otherProps}
          />
          {(label || (typeof label === 'string' && label.length < 0)) && (
            <label htmlFor={radioId.current}>{label}</label>
          )}
        </S.RadioGroup>
      );
    },
  ),
);
