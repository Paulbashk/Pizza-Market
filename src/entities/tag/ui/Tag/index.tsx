import React from 'react';
import { useSelector } from 'react-redux';

// services
import { getById } from '@/entities/tag/model/selectors';

// types
import { type Tag as typeTag } from '@/entities/tag/model/types';

// components
import { Button, ButtonColors } from '@/shared/ui';

interface TagProps {
  id: typeTag.Variable;
  selected: boolean;
  onClick: (id: typeTag.Variable) => void;
}

const Tag = ({ id, selected, onClick }: TagProps) => {
  const tag = useSelector(getById(id));

  return (
    <Button
      isActive={selected}
      color={ButtonColors.gray}
      onClick={() => onClick(id)}
    >
      {tag.name}
    </Button>
  );
};

export default React.memo(Tag);
