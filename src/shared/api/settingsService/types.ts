import type { ILogo, IBanner, ICategory } from '@/shared/types/interfaces';

export interface IGetAllResponse {
  categories: ICategory[];
  logo: ILogo;
  banners: IBanner[];
}

export type TGetLogoResponse = ILogo;
export type TGetBannersResponse = IBanner[];
