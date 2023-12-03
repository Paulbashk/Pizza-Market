import type { ILogo, IBanner, ICategory } from '@/shared/types/interfaces';

export interface FetchAllResponse {
  categories: ICategory[];
  logo: ILogo;
  banners: IBanner[];
}

export type FetchGetLogoResponse = ILogo;
export type FetchGetBannersResponse = IBanner[];
