'use client';

import { type ReactNode, memo } from 'react';

// types
import type { IPromocode } from '@/shared/types/interfaces';

// components
import { NavigationTitle } from '../NavigationTitle';
import { NavigationInfoItems } from '../NavigationInfoItems';
import { NavigationPrice } from '../NavigationPrice';
import { NavigationPromocode } from '../NavigationPromocode';

// assets
import * as S from './styled';

const TitleMemo = memo(NavigationTitle);
const NavigationInfoItemsMemo = memo(NavigationInfoItems);
const NavigationPriceMemo = memo(NavigationPrice);
const NavigationPromocodeMemo = memo(NavigationPromocode);

export interface INavigationProps {
  isButton: boolean;
  isTotalPrice: boolean;
  isCheckbox: boolean;
  isItemsPrice: boolean;
  isPromocode: boolean;
}

type TRenderElements = {
  button?: (() => ReactNode | null) | null;
  checkbox?: (() => ReactNode | null) | null;
};

interface IBasketNavigationProps {
  promocodes?: IPromocode[];
  renderElements: TRenderElements;
  navigation?: INavigationProps;
}

export const BasketNavigation = ({
  promocodes,
  renderElements = {
    button: null,
    checkbox: null,
  },
  navigation = {
    isButton: true,
    isTotalPrice: true,
    isCheckbox: false,
    isItemsPrice: true,
    isPromocode: true,
  },
}: IBasketNavigationProps) => {
  const { isButton, isTotalPrice, isCheckbox, isItemsPrice, isPromocode } =
    navigation;

  const { button: renderButton, checkbox: renderCheckbox } = renderElements;

  return (
    <S.Wrapper>
      <TitleMemo title="Ваш заказ" />
      {isPromocode && <NavigationPromocodeMemo promocodes={promocodes} />}
      {isItemsPrice && <NavigationInfoItemsMemo />}
      {isTotalPrice && <NavigationPriceMemo />}
      {isCheckbox && renderCheckbox && renderCheckbox()}
      {isButton && renderButton && renderButton()}
    </S.Wrapper>
  );
};
