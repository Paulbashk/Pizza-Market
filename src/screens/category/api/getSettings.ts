import { wrapperFetch } from '@/shared/server/api';
import type { IBanner, ICategory, ILogo } from '@/shared/types/interfaces';

export const getSettings = () =>
  Promise.all([
    wrapperFetch<ICategory[]>('/categories', { next: { revalidate: 360 } }),
    wrapperFetch<ILogo>('/logo', { next: { revalidate: 360 } }),
    wrapperFetch<IBanner[]>('/banners', { next: { revalidate: 360 } }),
  ]).then(([categories, logo, banners]) => ({ categories, logo, banners }));
