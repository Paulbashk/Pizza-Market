'use client';

import { memo } from 'react';
import { usePathname } from 'next/navigation';
import { type ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

// types
import type { IMenuItem } from '@/shared/types/interfaces';

// libs
import { menuHeader } from '@/shared/libs/configs';
import { useHeaderLink } from '../../libs/hooks';

// assets
import * as S from './styled';

interface IHeaderMenuProps {
  items: IMenuItem[];
  handleClick?: () => void;
  resetAction?: ActionCreatorWithoutPayload<string>;
}

const StyledMenuMemo = memo(S.StyledMenu);

const { ANCHOR_SECTION } = menuHeader;

export const HeaderMenu = ({
  items,
  handleClick: handleClickProp,
  resetAction,
}: IHeaderMenuProps) => {
  const pathname = usePathname();

  const { handleClick } = useHeaderLink({
    anchor: ANCHOR_SECTION,
    resetAction,
    callbackClick: handleClickProp,
  });

  const renderItem = ({ href, name }: IMenuItem) => (
    <S.MenuLink
      href={href}
      $active={href === pathname}
      onClick={handleClick}
      scroll={false}
    >
      {name}
    </S.MenuLink>
  );

  return <StyledMenuMemo items={items} renderItem={renderItem} />;
};
