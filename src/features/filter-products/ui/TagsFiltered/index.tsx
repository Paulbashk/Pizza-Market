import React from 'react';
import { useSelector } from 'react-redux';

// services
import { filterSelect } from '@/features/filter-products/services';
import { type Tag, TagVariables, tagUI } from '@/entities/tag';

// hooks
import { useActions } from '@/shared/libs/hooks';

const TagsFiltered = () => {
  const { setFiltered } = useActions();

  const { tagList, filtered } = useSelector(filterSelect.getTagIdsWithFiltered);

  const selectItem = (id: Tag.Variable) => {
    setFiltered(id);
  };

  return (
    <tagUI.TagList
      isAll
      isAllActive={filtered === TagVariables.ALL}
      list={tagList}
      activeId={filtered}
      callbackSelectItem={selectItem}
    />
  );
};

export default TagsFiltered;
