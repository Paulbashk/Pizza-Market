import { wrapperFetch } from '@/shared/server/api';
import type { IPage } from '@/shared/types/interfaces';

type TGetPageByNameReturn = Promise<IPage>;

export const pageScreenService = () => ({
  getPageByName: (pageName: string): TGetPageByNameReturn =>
    wrapperFetch<IPage>(`/pages/${pageName}`, {
      next: { revalidate: 360 },
    }),
});
