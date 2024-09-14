'use client';

import { type Dispatch, type SetStateAction } from 'react';

// components
import { withProductStateReset } from '@/features/product/reset';
import { HeaderMenu } from '@/entities/header-menu';

// types
import { IMenuItem } from '@/shared/types/interfaces';

type TStateActionVisible = Dispatch<SetStateAction<boolean>>;

interface IHeaderMenuWithResetProps {
  menuItems: IMenuItem[];
  setVisibleHamburger?: TStateActionVisible;
}

export const HeaderMenuWithReset = ({
  menuItems,
  setVisibleHamburger,
}: IHeaderMenuWithResetProps) => {
  const HeaderMenuUpdate = withProductStateReset(HeaderMenu);

  const handleClickClose = () => {
    setVisibleHamburger && setVisibleHamburger(false);
  };

  return <HeaderMenuUpdate handleClick={handleClickClose} items={menuItems} />;
};
