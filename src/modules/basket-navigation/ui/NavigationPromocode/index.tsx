import { memo } from 'react';

// types
import type { IPromocode } from '@/shared/types/interfaces';

// components
import { PromocodeForm } from '@/entities/promocode';
import { withPromocodeToggle } from '@/features/promocode/toggle';

interface INavigationPromocodeProps {
  promocodes?: IPromocode[];
}

const PromocodeFormMemo = memo(PromocodeForm);

export const NavigationPromocode = ({
  promocodes,
}: INavigationPromocodeProps) => {
  const PromocodeFormActive = withPromocodeToggle(
    PromocodeFormMemo,
    promocodes,
  );

  return <PromocodeFormActive />;
};
