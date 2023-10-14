import React from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// services
import { getByIdOnlyOptions } from '@/entities/product/model/selectors';

// utils
import { getActiveOptionId } from '@/entities/product/libs';

// assets
import * as S from './styled';

interface ProductVariablesProps {
  handleSelect: (optionId: number, selected: string) => void;
  id: EntityId;
}

function ProductVariables({ handleSelect, id }: ProductVariablesProps) {
  const { options, isOptions } = useSelector(getByIdOnlyOptions(id));

  if (!isOptions) {
    return null;
  }

  return (
    <S.WrapperVariables>
      {options!.map((option, _id: number) => (
        <S.VariableRadioGroup
          key={option.name}
          name={option.name}
          defaultValue={option.items[getActiveOptionId(option)].label}
          onChange={event => handleSelect(_id, event.target.value)}
        >
          {option.items.map(item => (
            <S.VariableRadio
              key={item.label}
              value={item.label}
              label={item.label}
              $isSize={option.name === 'size'}
            />
          ))}
        </S.VariableRadioGroup>
      ))}
    </S.WrapperVariables>
  );
}

export default React.memo(ProductVariables);
