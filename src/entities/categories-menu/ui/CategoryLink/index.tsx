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
  handleClick: (id: number, event: MouseEvent<HTMLElement>) => void;
  anchorTag: string;
}

export const CategoryLink = ({
  item,
  handleClick,
  anchorTag,
}: CategoryLinkProps) => {
  const { id, name, slug } = item;

  const { linkName, isPath, onClick } = useCategorySlug({
    id,
    slug,
    anchorTag,
    callbackClick: handleClick,
  });

  return (
    <S.MenuLink
      href={linkName}
      $active={isPath}
      onClick={onClick}
      scroll={false}
    >
      {name}
    </S.MenuLink>
  );
};
