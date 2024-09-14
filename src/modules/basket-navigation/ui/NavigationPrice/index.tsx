import { memo } from 'react';

// libs
import { formatCount } from '@/shared/libs/utils';

// hooks
import { productBasketHooks } from '@/entities/product-basket';

// components
import { PriceTitle } from '../PriceTitle';

// assets
import * as S from './styled';

const { usePrice } = productBasketHooks;

const PriceTitleMemo = memo(PriceTitle);

export const NavigationPrice = () => {
  const { count, oldCount, sale } = usePrice();

  const formatedCount = {
    count: formatCount(count),
    oldCount: formatCount(oldCount),
    sale: `${sale} %`,
  };

  return (
    <S.WrapperPrice>
      <PriceTitleMemo title="Итого" />
      {sale && <S.Price $isSale>{formatedCount.oldCount}</S.Price>}
      <S.Price $isSale={false}>{formatedCount.count}</S.Price>
    </S.WrapperPrice>
  );
};
