// components
import { Button, ButtonColors } from '@/shared/ui';

// libs/hooks
import { useTagById } from '../../libs/hooks';

// types
import { type Tag } from '../../model/types';

interface ITagButtonProps {
  id: Tag.Variable;
  isActive: boolean;
  onClick: (id: Tag.Variable) => void;
}

export const TagButton = ({ id, isActive, onClick }: ITagButtonProps) => {
  const productTag = useTagById(id);

  if (!productTag) return null;

  const { name } = productTag;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <Button isActive={isActive} color={ButtonColors.gray} onClick={handleClick}>
      {name}
    </Button>
  );
};
