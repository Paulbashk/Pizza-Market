'use client';

import { type ChangeEvent } from 'react';
import { EntityId } from '@reduxjs/toolkit';

// utils
import { useOnlyOptions } from '@/entities/product/libs/hooks';
import { getActiveOptionId } from '@/entities/product/libs/utils';

// assets
import * as S from './styled';

interface ProductCardOptionsProps {
  handleSelect: (optionId: number, selected: string) => void;
  id: EntityId;
}

export function ProductCardOptions({
  handleSelect,
  id,
}: ProductCardOptionsProps) {
  const { options } = useOnlyOptions(id);

  return (
    <S.Wrapper>
      {options!.map((option, _id: number) => {
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          handleSelect(_id, event.target.value);
        };

        const defaultValue = option.items[getActiveOptionId(option)].label;

        return (
          <S.RadioGroupOptions
            key={option.name}
            name={option.name}
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
