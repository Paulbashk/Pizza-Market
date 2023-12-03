// libs/hooks
import { useTagById } from '@/entities/tag/libs/hooks';

// types
import { type Tag } from '@/entities/tag/model/types';

// components
import { Button, ButtonColors } from '@/shared/ui';

interface TagButtonProps {
  id: Tag.Variable;
  isActive: boolean;
  onClick: (id: Tag.Variable) => void;
}

export const TagButton = ({ id, isActive, onClick }: TagButtonProps) => {
  const { name } = useTagById(id);

  const handleClick = () => {
    onClick(id);
  };

  return (
    <Button isActive={isActive} color={ButtonColors.gray} onClick={handleClick}>
      {name}
    </Button>
  );
};
