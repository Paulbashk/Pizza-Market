import React from 'react';

// services
import { tagSelect } from '@/entities/tag';

// components
import { productsFilterUI } from '@/features/filter-products';
import { Loader, withQueryResolver } from '@/shared/ui';

// assets
import * as S from './styled';

interface TagsProps {
  categoryId: number;
}

const { TagsFiltered } = productsFilterUI;

function Tags({ categoryId }: TagsProps) {
  const WithQueryTags = withQueryResolver(TagsFiltered, {
    actionName: 'fetchTags',
    arg: { category: categoryId },
    selector: tagSelect.queryState,
  })(<Loader margin={-2} />);

  return (
    <S.Categories>
      <WithQueryTags />
    </S.Categories>
  );
}

export default Tags;
