import React from 'react';
import { useSelector } from 'react-redux';

// services
import { tagSelect, type Tag as typeTag } from '@/entities/tag/services';

// components
import { Button, ButtonColors } from '@/shared/ui';

interface TagProps {
  id: typeTag.Variable;
  selected: boolean;
  onClick: (id: typeTag.Variable) => void;
}

const Tag = ({ id, selected, onClick }: TagProps) => {
  const tag = useSelector(tagSelect.getById(id));

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
