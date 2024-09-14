'use client';

// hooks
import { useWindowWidth } from '@/shared/libs/hooks';

// types
import { IMenuItem } from '@/shared/types/interfaces';

// components
import { HeaderMenuWithReset } from '../HeaderMenuWithReset';

interface IHeaderMenuIsDesktopProps {
  menuItems: IMenuItem[];
}

export const HeaderMenuIsDesktop = ({
  menuItems,
}: IHeaderMenuIsDesktopProps) => {
  const { isDesktop } = useWindowWidth();

  if (!isDesktop) return null;

  if (menuItems.length <= 0) return null;

  return <HeaderMenuWithReset menuItems={menuItems} />;
};
