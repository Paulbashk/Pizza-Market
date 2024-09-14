import { useCallback, type MouseEvent } from 'react';
import { useScrollToAnchor, useAppDispatch } from '@/shared/libs/hooks';
import { type ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

type TUseHeaderLinkProps = {
  anchor: string;
  callbackClick?: () => void;
  resetAction?: ActionCreatorWithoutPayload<string>;
};

type TUseHeaderLinkReturn = {
  handleClick: (event: MouseEvent<HTMLElement>) => void;
};

type TUseHeaderLink = (props: TUseHeaderLinkProps) => TUseHeaderLinkReturn;

export const useHeaderLink: TUseHeaderLink = ({
  anchor,
  callbackClick,
  resetAction,
}) => {
  const dispatch = useAppDispatch();
  const scrollToAnchor = useScrollToAnchor();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const eventPathname = event.currentTarget.attributes[1].value;
      const { pathname } = window.location;

      if (eventPathname === pathname) {
        event.preventDefault();
      } else if (resetAction) {
        dispatch(resetAction());
      }

      scrollToAnchor(anchor);

      if (callbackClick) {
        callbackClick();
      }
    },
    [dispatch],
  );

  return {
    handleClick,
  };
};
