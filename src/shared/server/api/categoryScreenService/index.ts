import { wrapperFetch } from '@/shared/server/api';
import type { ICategory, IBanner } from '@/shared/types/interfaces';

type TCategoryScreenServiceReturn = Promise<{
  categories: ICategory[];
  banners: IBanner[];
}>;

export const categoryScreenService = (): TCategoryScreenServiceReturn =>
  Promise.all([
    wrapperFetch<ICategory[]>('/categories', { next: { revalidate: 360 } }),
    wrapperFetch<IBanner[]>('/banners', { next: { revalidate: 360 } }),
  ]).then(([categories, banners]) => ({ categories, banners }));
