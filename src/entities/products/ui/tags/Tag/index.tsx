import React from 'react';
import { useSelector } from 'react-redux';

// services
import { type Filter } from '@/entities/products/services/filter';
import { tagSelect } from '@/entities/products/services/tags';

// components
import { Button, ButtonColors } from '@/shared/ui';

interface TagProps {
  id: Filter.Filtered;
  selected: boolean;
  onClick: (id: Filter.Filtered) => void;
}

const Tag = ({ id, selected, onClick }: TagProps) => {
  const tag = useSelector(tagSelect.getById(id));

  return (
    <Button
      isActive={selected}
      color={ButtonColors.gray}
      onClick={() => onClick(id)}
    >
      {tag ? tag.name : 'Все'}
    </Button>
  );
};

export default React.memo(Tag);
