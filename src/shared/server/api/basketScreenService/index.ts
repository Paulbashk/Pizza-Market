import { wrapperFetch } from '@/shared/server/api';
import { type IPromocode } from '@/shared/types/interfaces';

type TBasketScreenServiceReturn = Promise<IPromocode[]>;

export const basketScreenService = (): TBasketScreenServiceReturn =>
  wrapperFetch<IPromocode[]>('/promocode', { next: { revalidate: 360 } });
