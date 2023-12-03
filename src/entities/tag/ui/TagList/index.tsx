'use client';

import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

// services
import { selects } from '@/entities/tag/model/';

// types
import { type Tag } from '@/entities/tag/model/types';

// components
import { TagButton } from '@/entities/tag/ui/TagButton';

// assets
import * as S from './styled';

interface TagListProps {
  selectId: Tag.Variable;
  handleSelect: (id: Tag.Variable) => void;
}

const TagButtonMemo = memo(TagButton);

export const TagList = memo(({ selectId, handleSelect }: TagListProps) => {
  const ids = useSelector(selects.getIdsWithAll);

  const TagButtonsMemo = useMemo(
    () =>
      ids.map(id => (
        <TagButtonMemo
          key={id}
          id={id}
          isActive={selectId === id}
          onClick={handleSelect}
        />
      )),
    [selectId, handleSelect],
  );

  if (ids.length === 0) return null;

  return <S.Wrapper>{TagButtonsMemo}</S.Wrapper>;
});
