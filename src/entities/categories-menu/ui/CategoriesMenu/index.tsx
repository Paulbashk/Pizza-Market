'use client';

import { memo } from 'react';
import { usePathname } from 'next/navigation';

// types
import type { ICategory } from '@/shared/types/interfaces';

// libs
import { useCategoryLink } from '@/entities/categories-menu/libs/hooks';

// assets
import * as S from './styled';

interface CategoriesMenuProps {
  categories: ICategory[];
}

const StyledMenuMemo = memo(S.StyledMenu);
const CategoryLinkMemo = memo(S.MenuLink);

export const CategoriesMenu = ({ categories }: CategoriesMenuProps) => {
  const ANCHOR_TAG = '#section-products';
  const pathname = usePathname();

  const { handleClick } = useCategoryLink({ anchor: ANCHOR_TAG });

  return (
    <StyledMenuMemo
      items={categories}
      renderItem={({ slug, name }: ICategory) => (
        <CategoryLinkMemo
          href={slug}
          $active={slug === pathname}
          onClick={handleClick}
          scroll={false}
        >
          {name}
        </CategoryLinkMemo>
      )}
    />
  );
};
