import { wrapperFetch } from '@/shared/server/api';
import type { IMenuItem, ILogo } from '@/shared/types/interfaces';

type THeaderServiceReturn = Promise<{
  menuItems: IMenuItem[];
  logo: ILogo;
}>;

export const headerService = (): THeaderServiceReturn =>
  Promise.all([
    wrapperFetch<IMenuItem[]>('/menu', { next: { revalidate: 360 } }),
    wrapperFetch<ILogo>('/logo', { next: { revalidate: 360 } }),
  ]).then(([menuItems, logo]) => ({ menuItems, logo }));
