/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { ComponentPropsWithoutRef, useContext } from 'react';
import RadioGroupContext from '@/shared/ui/RadioGroup/context';
import { useGenerateId } from '@/shared/libs/hooks';

import * as S from './styled';

export enum RadioColors {
  gray = 'gray',
}

export interface RadioProps extends ComponentPropsWithoutRef<'input'> {
  value: string | number;
  id?: string;
  label?: React.ReactNode;
  color?: RadioColors;
}

const RadioButton = ({
  id,
  label,
  value,
  onChange,
  checked: propChecked,
  name: nameProp,
  color = RadioColors.gray,
  ...otherProps
}: RadioProps) => {
  const radioGroup = useContext(RadioGroupContext);
  const radioId = useGenerateId(id);
  let checked = propChecked;
  let name = nameProp;

  if (radioGroup) {
    const { name: groupName, value: groupValue } = radioGroup;

    if (nameProp === undefined) {
      name = groupName;
    }

    if (propChecked === undefined) {
      checked = String(groupValue) === String(value);
    }
  }

  const chainedFunctions = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (radioGroup !== undefined) {
      const { onChange: change } = radioGroup;

      change(event, event.target.value);
    }

    onChange && onChange(event);
  };

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
};

export default RadioButton;
