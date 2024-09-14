import { usePathname } from 'next/navigation';
import { productBasketHooks } from '@/entities/product-basket';
import { typeBasketPages } from '@/shared/libs/configs';
import type { IBasketPageType } from '@/shared/types/interfaces';

const { useIsEmptyBasket } = productBasketHooks;

type TUseBasketPage = () => {
  page: IBasketPageType | undefined;
  isEmptyBasket: boolean;
};

export const useBasketPage: TUseBasketPage = () => {
  const pathname = usePathname();
  const isEmptyBasket = useIsEmptyBasket();

  const currentTypePage = typeBasketPages.find(
    typePage => typePage.slug === pathname,
  );

  return { page: currentTypePage, isEmptyBasket };
};
