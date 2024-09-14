'use client';

import { memo } from 'react';

// types
import { type TagTypes } from '@/entities/tag';

// hooks
import { useTagButtons } from '../../libs/hooks';

// assets
import * as S from './styled';

interface ITagListProps {
  selectId: TagTypes.Variable;
  handleSelect: (id: TagTypes.Variable) => void;
}

export const TagList = memo(({ selectId, handleSelect }: ITagListProps) => {
  const { list, isEmpty } = useTagButtons({ selectId, handleSelect });

  if (isEmpty) return null;

  return <S.Wrapper>{list}</S.Wrapper>;
});
