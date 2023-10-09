import React from 'react';

// components
import { MenuItem } from '@/entities/categories/ui';

// assets
import * as S from './styled';

const CategoriesMenu = () => {
  const menuList = [
    {
      name: 'Пицца',
      link: '/',
    },
    {
      name: 'Напитки',
      link: '/drink',
    },
    {
      name: 'Закуски',
      link: '/eat',
    },
  ];

  if (menuList.length < 0) return null;

  return (
    <div>
      <S.MenuList>
        {menuList.map(item => (
          <MenuItem key={item.name} item={item} />
        ))}
      </S.MenuList>
    </div>
  );
};

export default CategoriesMenu;
