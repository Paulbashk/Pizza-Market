'use client';

import { type ChangeEvent } from 'react';
import { nanoid } from '@reduxjs/toolkit';

// types
import { type Product } from '../../model/types';

// utils
import { getActiveOptionId } from '../../libs/utils';

// assets
import * as S from './styled';

interface IProductCardOptionsProps {
  handleSelect: (optionId: number, selected: string) => void;
  options: Product.Options[];
}

export function ProductCardOptions({
  handleSelect,
  options,
}: IProductCardOptionsProps) {
  return (
    <S.Wrapper>
      {options!.map((option, optionId: number) => {
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          handleSelect(optionId, event.target.value);
        };

        const defaultValue = option.items[getActiveOptionId(option)].label;
        const optionName = option.name + nanoid();

        return (
          <S.RadioGroupOptions
            key={option.name}
            name={optionName}
            defaultValue={defaultValue}
            onChange={handleChange}
          >
            {option.items.map(item => (
              <S.RadioOption
                key={item.label}
                value={item.label}
                label={item.label}
                $isSize={option.name === 'size'}
              />
            ))}
          </S.RadioGroupOptions>
        );
      })}
    </S.Wrapper>
  );
}
