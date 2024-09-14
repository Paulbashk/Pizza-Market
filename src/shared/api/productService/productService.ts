import { AxiosResponse } from 'axios';
import { ApiClient } from '@/shared/api';
import type { TFetchGetAllResponse, TFetchGetAllRequest } from './types';

export class ProductService {
  public static async fetchGetAll<
    T = TFetchGetAllResponse,
    R = AxiosResponse<T>,
    D = TFetchGetAllRequest,
  >(params: D): Promise<R> {
    return ApiClient.get<T, R, D>('/products', {
      params,
    });
  }
}
