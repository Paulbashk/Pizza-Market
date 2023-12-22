import { wrapperFetch } from '@/shared/server/api';
import type { ICategory, ILogo } from '@/shared/types/interfaces';

export const headerService = () =>
  Promise.all([
    wrapperFetch<ICategory[]>('/categories', { next: { revalidate: 360 } }),
    wrapperFetch<ILogo>('/logo', { next: { revalidate: 360 } }),
  ]).then(([categories, logo]) => ({ categories, logo }));
