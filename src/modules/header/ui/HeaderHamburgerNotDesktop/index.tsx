'use client';

import {
  type Dispatch,
  type SetStateAction,
  type ComponentPropsWithoutRef,
} from 'react';

// hooks
import { useWindowWidth } from '@/shared/libs/hooks';

// types
import { IMenuItem } from '@/shared/types/interfaces';

// components
import { HeaderHamburger } from '@/entities/header-hamburger';
import { HeaderMenuWithReset } from '../HeaderMenuWithReset';

type TStateActionVisible = Dispatch<SetStateAction<boolean>>;

interface IHeaderHamburgerNotDesktopProps
  extends ComponentPropsWithoutRef<'div'> {
  menuItems: IMenuItem[];
}

export const HeaderHamburgerNotDesktop = ({
  menuItems,
  ...otherProps
}: IHeaderHamburgerNotDesktopProps) => {
  const { isDesktop } = useWindowWidth();

  if (isDesktop) return null;

  if (menuItems.length <= 0) return null;

  const renderMenuItems = (setVisibleHamburger: TStateActionVisible) => (
    <HeaderMenuWithReset
      menuItems={menuItems}
      setVisibleHamburger={setVisibleHamburger}
    />
  );

  return <HeaderHamburger renderContent={renderMenuItems} {...otherProps} />;
};
