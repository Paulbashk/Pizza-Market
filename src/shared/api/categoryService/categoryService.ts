import type { AxiosResponse } from 'axios';
import { ApiClient } from '@/shared/api';
import type { FetchGetAllResponse } from './types';

export class CategoryService {
  public static async fetchGetAll<
    T = FetchGetAllResponse,
    R = AxiosResponse<T>,
    D = void,
  >() {
    return ApiClient.get<T, R, D>('/categories');
  }
}
