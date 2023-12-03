import { type AxiosResponse } from 'axios';
import { ApiClient } from '@/shared/api';
import { CategoryService } from '@/shared/api/categoryService';
import type { FetchGetLogoResponse, FetchGetBannersResponse } from './types';

const { error } = console;

export const revalidate = 3600;

export class SettingsService {
  public static async fetchGetLogo<
    T = FetchGetLogoResponse,
    R = AxiosResponse<T>,
    D = void,
  >() {
    try {
      return await ApiClient.get<T, R, D>('/logo');
    } catch {
      error('failed to retrieve data');
    }
  }

  public static async fetchGetBanners<
    T = FetchGetBannersResponse,
    R = AxiosResponse<T>,
    D = void,
  >() {
    try {
      return await ApiClient.get<T, R, D>('/banners');
    } catch {
      error('failed to retrieve data');
    }
  }

  public static async fetchAll() {
    return Promise.all([
      CategoryService.fetchGetAll(),
      SettingsService.fetchGetLogo(),
      SettingsService.fetchGetBanners(),
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
