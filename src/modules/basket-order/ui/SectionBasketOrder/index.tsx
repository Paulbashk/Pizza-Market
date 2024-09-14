'use client';

import { useRouter } from 'next/navigation';

// libs
import { getCookieData } from '@/shared/libs/utils/cookie';
import { orderCookie } from '@/shared/libs/configs';

// components
import { Section } from '@/shared/ui';
import { OrderContent } from '@/entities/order-content';

const { NOT_ORDER_LINK_PAGE, NAME_SAVE_COOKIE } = orderCookie;

export const SectionBasketOrder = () => {
  const order = getCookieData(NAME_SAVE_COOKIE);
  const router = useRouter();

  if (!order) {
    router.push(NOT_ORDER_LINK_PAGE);

    return null;
  }

  return (
    <Section name="basket-order">
      <OrderContent order={order} />
    </Section>
  );
};
