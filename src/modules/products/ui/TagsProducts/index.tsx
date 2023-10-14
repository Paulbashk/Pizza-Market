import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// services
import { tagModel } from '@/entities/tag';

// components
import { productFilterUI } from '@/features/product/byFiltered';
import { Loader, Error } from '@/shared/ui';

// hooks
import { useAppDispatch } from '@/shared/libs/hooks';

// assets
import * as S from './styled';

interface TagsProps {
  categoryId: number;
}

const { TagsFiltered } = productFilterUI;

function Tags({ categoryId }: TagsProps) {
  const { isLoading, isError, error } = useSelector(
    tagModel.selects.queryState,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(tagModel.asyncActions.getTagsThunk({ category: categoryId }));
  }, []);

  if (isLoading) {
    return <Loader margin={-2} />;
  }

  if (isError) {
    return <Error>{error}</Error>;
  }

  return (
    <S.Categories>
      <TagsFiltered />
    </S.Categories>
  );
}

export default Tags;
