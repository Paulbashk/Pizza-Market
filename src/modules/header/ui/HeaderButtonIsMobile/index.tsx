'use client';

// hooks
import { useWindowWidth } from '@/shared/libs/hooks';

// components
import {
  BasketHeaderButton,
  BasketHeaderButtonIcon,
} from '@/entities/header-basket';

export const HeaderButtonIsMobile = () => {
  const { isSmallMobile } = useWindowWidth();

  return isSmallMobile ? <BasketHeaderButtonIcon /> : <BasketHeaderButton />;
};
