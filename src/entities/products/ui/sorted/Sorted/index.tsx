import React from 'react';
import { useSelector } from 'react-redux';

// services
import { filterSelect } from '@/entities/products/services/filter';

// configs
import config from '@/entities/products/configs';

// hooks
import { useActions } from '@/shared/libs/hooks';
import { Dropdown } from '@/shared/ui';

// components
import { SortedLabel } from '@/entities/products/ui/sorted';

// assets
import * as S from './styled';

function Sorted() {
  const { setSorted } = useActions();

  const { sorted } = config;
  const sort = useSelector(filterSelect.sort);
  const defaultSortId = sorted.findIndex(item => item.type === sort);

  const handleSelected = (id: number) => {
    setSorted(sorted[id].type);
  };

  return (
    <S.ProductsSorted>
      <Dropdown
        onSelected={handleSelected}
        trigger={<SortedLabel label={sorted[defaultSortId].label} />}
        items={sorted.map((item, id) => (
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
