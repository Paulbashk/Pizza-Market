import { type ReactNode, memo } from 'react';

// types
import type { IPromocode } from '@/shared/types/interfaces';

// components
import {
  BasketNavigation,
  type INavigationProps,
} from '@/modules/basket-navigation';
import { WrapperContent } from '../WrapperContent';

// assets
import * as S from './styled';

interface ILayoutContentProps {
  renderContent: ReactNode;
  promocodes?: IPromocode[];
  renderButton?: () => ReactNode | null;
  renderCheckbox?: () => ReactNode | null;
  title?: string | null;
  navigation?: INavigationProps;
}

const WrapperContentMemo = memo(WrapperContent);

export const LayoutContent = ({
  renderContent,
  renderButton,
  renderCheckbox,
  title,
  promocodes,
  navigation,
}: ILayoutContentProps) => (
  <S.WrapperFlex>
    <WrapperContentMemo title={title} renderContent={renderContent} />
    <BasketNavigation
      promocodes={promocodes}
      renderElements={{
        button: renderButton,
        checkbox: renderCheckbox,
      }}
      navigation={navigation}
    />
  </S.WrapperFlex>
);
