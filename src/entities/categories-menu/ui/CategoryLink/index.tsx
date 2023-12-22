'use client';

import { type MouseEvent } from 'react';

// hooks
import { useCategorySlug } from '@/entities/categories-menu/libs/hooks';

// interfaces
import type { ICategory } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface CategoryLinkProps {
  item: ICategory;
  anchorTag: string;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

export const CategoryLink = ({
  item,
  handleClick,
  anchorTag,
}: CategoryLinkProps) => {
  const { name, slug } = item;

  const { linkName, isPath } = useCategorySlug({
    slug,
    anchorTag,
  });

  return (
    <S.MenuLink
      href={linkName}
      $active={isPath}
      onClick={handleClick}
      scroll={false}
    >
      {name}
    </S.MenuLink>
  );
};
