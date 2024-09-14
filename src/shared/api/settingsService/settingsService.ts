import { type AxiosResponse } from 'axios';
import { ApiClient } from '@/shared/api';
import { CategoryService } from '@/shared/api/categoryService';
import type {
  TGetLogoResponse,
  TGetBannersResponse,
  IGetAllResponse,
} from './types';

const { error } = console;

export const revalidate = 3600;

export class SettingsService {
  public static async getLogo<
    T = TGetLogoResponse,
    R = AxiosResponse<T>,
    D = void,
  >(): Promise<R | undefined> {
    try {
      return await ApiClient.get<T, R, D>('/logo');
    } catch {
      error('failed to retrieve data');
    }
  }

  public static async getBanners<
    T = TGetBannersResponse,
    R = AxiosResponse<T>,
    D = void,
  >(): Promise<R | undefined> {
    try {
      return await ApiClient.get<T, R, D>('/banners');
    } catch {
      error('failed to retrieve data');
    }
  }

  public static async getAll(): Promise<IGetAllResponse | undefined> {
    return Promise.all([
      CategoryService.getAll(),
      SettingsService.getLogo(),
      SettingsService.getBanners(),
    ]).then(([dataCategories, dataLogo, dataBanners]) => {
      try {
        const { data: categories } = dataCategories!;
        const { data: logo } = dataLogo!;
        const { data: banners } = dataBanners!;

        return { categories, logo, banners };
      } catch {
        error('failed to retrieve data');
      }
    });
  }
}
