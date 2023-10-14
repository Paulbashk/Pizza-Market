import React from 'react';
import { useSelector } from 'react-redux';

// services
import { selects, actions } from '@/features/product/byFiltered/model';
import { type TagTypes, TagVariables, TagList } from '@/entities/tag';

// hooks
import { useAppDispatch } from '@/shared/libs/hooks';

const TagsFiltered = () => {
  const dispatch = useAppDispatch();

  const { tagList, filtered } = useSelector(selects.getTagIdsWithFiltered);

  const selectItem = (id: TagTypes.Variable) => {
    dispatch(actions.setFiltered(id));
  };

  return (
    <TagList
      isAll
      isAllActive={filtered === TagVariables.ALL}
      list={tagList}
      activeId={filtered}
      callbackSelectItem={selectItem}
    />
  );
};

export default TagsFiltered;
