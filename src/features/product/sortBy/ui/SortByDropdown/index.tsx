'use client';

// components
import { Dropdown } from '@/shared/ui';
import { SortedLabel } from '../DropdownLabel';

// libs
import { getDefaultSortByType } from '../../libs/utils';

// hooks
import { useSorted } from '../../libs/hooks';

// assets
import * as S from './styled';

export function SortByDropdown() {
  const { sort, onSelected, sortedTypes: items } = useSorted();

  const { item: defaultItem, index: defaultIndex } = getDefaultSortByType({
    items,
    sort,
  });

  return (
    <S.Wrapper>
      <Dropdown
        onSelected={onSelected}
        trigger={<SortedLabel label={defaultItem.label} />}
        items={items.map((item, id) => (
          <S.DropdownItem key={item.value} $active={defaultIndex === id}>
            {item.value}
          </S.DropdownItem>
        ))}
        selected={defaultIndex}
      />
    </S.Wrapper>
  );
}
