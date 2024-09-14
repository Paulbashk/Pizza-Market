import { memo } from 'react';

// components
import { InfoItem } from '@/shared/ui';

// libs
import { formatCount } from '@/shared/libs/utils';

// hooks
import { productBasketHooks } from '@/entities/product-basket';

// assets
import * as S from './styled';

const InfoItemMemo = memo(InfoItem);

const { usePrice } = productBasketHooks;

export const NavigationInfoItems = () => {
  const { count, oldCount, sale } = usePrice();

  const formatedCount = {
    count: formatCount(count),
    oldCount: formatCount(oldCount),
    sale: `${sale} %`,
  };

  return (
    <S.WrapperItems>
      {sale ? (
        [
          <InfoItem title="Скидка" value={formatedCount.sale} />,
          <InfoItem
            title="Сумма заказа"
            throughValue={formatedCount.oldCount}
            value={formatedCount.count}
          />,
        ]
      ) : (
        <InfoItem title="Сумма заказа" value={formatedCount.count} />
      )}
      <InfoItemMemo title="Доставка" value="Бесплатно" />
    </S.WrapperItems>
  );
};
