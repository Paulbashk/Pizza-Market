import React, { useCallback } from 'react';
import { EntityId } from '@reduxjs/toolkit';

// services
import { type Tag as typeTag } from '@/entities/tag/model/types';

// components
import { Tag } from '@/entities/tag/ui';

interface TagListProps {
  isAll: boolean;
  isAllActive: boolean;
  activeId: typeTag.Variable;
  list: EntityId[];
  callbackSelectItem: (id: typeTag.Variable) => void;
}

const TagList = ({
  isAll = true,
  isAllActive = true,
  activeId,
  list,
  callbackSelectItem,
}: TagListProps) => {
  const selectItem = useCallback((id: typeTag.Variable) => {
    callbackSelectItem(id);
  }, []);

  return (
    <>
      {isAll && <Tag id="ALL" selected={isAllActive} onClick={selectItem} />}
      {[...list].map(id => (
        <Tag key={id} id={id} selected={activeId === id} onClick={selectItem} />
      ))}
    </>
  );
};

export default TagList;
