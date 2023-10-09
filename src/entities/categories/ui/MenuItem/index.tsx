import React from 'react';
import { useRouter } from 'next/router';

// assets
import * as S from './styled';

interface MenuItemProps {
  item: IMenuItem;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const router = useRouter();

  return (
    <li>
      <S.MenuLink href={item.link} $active={router.asPath === item.link}>
        {item.name}
      </S.MenuLink>
    </li>
  );
};

export default MenuItem;
