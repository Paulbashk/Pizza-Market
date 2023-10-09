import React from 'react';
import { useSelector } from 'react-redux';

// services
import { tagSelect } from '@/entities/products/services/tags';
import { filterSelect } from '@/entities/products/services/filter';

// components
import { TagList } from '@/entities/products/ui/tags';
import { Loader, withQueryResolver } from '@/shared/ui';

// assets
import * as S from './styled';

function Tags() {
  const category = useSelector(filterSelect.category);

  const WithQueryTags = withQueryResolver(TagList, {
    actionName: 'fetchTags',
    arg: { category },
    selector: tagSelect.queryState,
  })(<Loader margin={-2} />);

  return (
    <S.Categories>
      <WithQueryTags />
    </S.Categories>
  );
}

export default Tags;
