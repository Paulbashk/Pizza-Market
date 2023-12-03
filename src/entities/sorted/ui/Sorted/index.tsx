// components
import { Dropdown } from '@/shared/ui';
import { SortedLabel } from '@/entities/sorted/ui';

// libs/utils
import { getDefaultSortByType } from '@/entities/sorted/libs/utils';

// types
import { type ISort } from '@/entities/sorted/types';

// assets
import * as S from './styled';

interface SortedProps {
  sort: string;
  items: ISort[];
  onSelected: (id: number) => void;
}

export function Sorted({ sort, items, onSelected }: SortedProps) {
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
