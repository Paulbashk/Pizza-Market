'use client';

// hooks
import { useSelectCategory } from '@/entities/categories-menu/libs/hooks';

// types
import type { ICategory } from '@/shared/types/interfaces';

// components
import { CategoryLink } from '@/entities/categories-menu/ui/CategoryLink';

// assets
import * as S from './styled';

interface CategoriesMenuProps {
  categories: ICategory[];
  categoryId: number;
}

export const CategoriesMenu = ({
  categoryId,
  categories,
}: CategoriesMenuProps) => {
  const ANCHOR_TAG = '#section-products';

  const handleClick = useSelectCategory(categoryId);

  return (
    <S.StyledMenu
      items={categories}
      renderItem={(item: ICategory) => (
        <CategoryLink
          item={item}
          handleClick={handleClick}
          anchorTag={ANCHOR_TAG}
        />
      )}
    />
  );
};
