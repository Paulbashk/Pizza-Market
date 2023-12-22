import { useCallback, type MouseEvent } from 'react';
import { productFilterModel } from '@/features/product/byFiltered';
import { useScrollToAnchor, useAppDispatch } from '@/shared/libs/hooks';

export const useCategoryLink = ({ anchor }: { anchor: string }) => {
  const dispatch = useAppDispatch();
  const scrollToAnchor = useScrollToAnchor();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const eventSlug = event.currentTarget.attributes[1].value;
      const { pathname } = window.location;

      if (eventSlug === pathname) {
        event.preventDefault();
      } else {
        dispatch(productFilterModel.actions.resetState());
      }

      scrollToAnchor(anchor);
    },
    [dispatch],
  );

  return {
    handleClick,
  };
};
