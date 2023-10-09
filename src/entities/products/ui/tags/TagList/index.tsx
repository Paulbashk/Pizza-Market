import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

// services
import {
  type Filter,
  FilteredEnumLocalTypes,
} from '@/entities/products/services/filter';
import { tagSelect } from '@/entities/products/services/tags';

// hooks
import { useActions } from '@/shared/libs/hooks';

// components
import { Tag } from '@/entities/products/ui/tags';

const TagList = () => {
  const { setFiltered } = useActions();

  const { tagList, filtered } = useSelector(tagSelect.getIdsWithFiltered);

  const selectItem = useCallback((id: Filter.Filtered) => {
    setFiltered(id);
  }, []);

  return (
    <>
      {[...Object.values(FilteredEnumLocalTypes), ...tagList].map(id => (
        <Tag key={id} id={id} selected={filtered === id} onClick={selectItem} />
      ))}
    </>
  );
};

export default TagList;
