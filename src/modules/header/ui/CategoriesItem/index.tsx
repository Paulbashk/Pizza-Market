import React from 'react';
import { useRouter } from 'next/router';

// interfaces
import type { ICategory } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface CategoriesItemProps {
  item: ICategory;
  handleClick: (id: number, event: React.MouseEvent<HTMLElement>) => void;
}

const CategoriesItem = ({ item, handleClick }: CategoriesItemProps) => {
  const { id, name, slug } = item;

  const router = useRouter();

  const isCurrentPath = router.asPath === slug;

  const handleEventClick = (event: React.MouseEvent<HTMLElement>) => {
    handleClick(id, event);
  };

  return (
    <li>
      <S.MenuLink
        href={slug}
        $active={isCurrentPath}
        onClick={handleEventClick}
      >
        {name}
      </S.MenuLink>
    </li>
  );
};

export default React.memo(CategoriesItem);
