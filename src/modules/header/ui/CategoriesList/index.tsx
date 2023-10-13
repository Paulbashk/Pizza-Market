import React from 'react';

// types
import type { ICategory } from '@/shared/types/interfaces';

// components
import { CategoriesItem } from '@/modules/header/ui';

// assets
import * as S from './styled';

interface CategoriesListProps {
  categories: ICategory[];
  categoryId: number;
}

const CategoriesList = ({ categoryId, categories }: CategoriesListProps) => {
  const handleClick = (id: number, event: React.MouseEvent<HTMLElement>) => {
    if (categoryId === id) {
      event.preventDefault();
    }
  };

  return (
    <S.MenuList>
      {categories.map(item => (
        <CategoriesItem key={item.id} item={item} handleClick={handleClick} />
      ))}
    </S.MenuList>
  );
};

export default CategoriesList;
