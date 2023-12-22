import { wrapperFetch } from '@/shared/server/api';
import type { ICategory, IBanner } from '@/shared/types/interfaces';

export const categoryScreenService = () =>
  Promise.all([
    wrapperFetch<ICategory[]>('/categories', { next: { revalidate: 360 } }),
    wrapperFetch<IBanner[]>('/banners', { next: { revalidate: 360 } }),
  ]).then(([categories, banners]) => ({ categories, banners }));
