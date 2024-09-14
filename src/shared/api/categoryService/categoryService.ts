import type { AxiosResponse } from 'axios';
import { ApiClient } from '@/shared/api';
import type { TGetAllResponse } from './types';

export class CategoryService {
  public static async getAll<
    T = TGetAllResponse,
    R = AxiosResponse<T>,
    D = void,
  >(): Promise<R> {
    return ApiClient.get<T, R, D>('/categories');
  }
}
