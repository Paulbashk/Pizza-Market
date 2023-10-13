import React from 'react';

// components
import { Dropdown } from '@/shared/ui';
import { SortedLabel } from '@/entities/sorted/ui';

// types
import { ISort } from '@/entities/sorted/types';

// assets
import * as S from './styled';

interface SortedProps {
  sort: string;
  items: ISort[];
  onSelected: (id: number) => void;
}

function Sorted({ sort, items, onSelected }: SortedProps) {
  const defaultSortId = items.findIndex(item => item.type === sort);

  return (
    <S.ProductsSorted>
      <Dropdown
        onSelected={onSelected}
        trigger={<SortedLabel label={items[defaultSortId].label} />}
        items={items.map((item, id) => (
          <S.DropdownItem key={item.value} $active={defaultSortId === id}>
            {item.value}
          </S.DropdownItem>
        ))}
        selected={defaultSortId}
      />
    </S.ProductsSorted>
  );
}

export default Sorted;
