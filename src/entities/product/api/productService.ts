import { AxiosResponse } from 'axios';
import { ApiClient } from '@/shared/api';
import type { FetchGetAllResponse, FetchGetAllRequest } from './types';

export class ProductService {
  public static async fetchGetAll<
    T = FetchGetAllResponse,
    R = AxiosResponse<T>,
    D = FetchGetAllRequest,
  >(params: D) {
    return ApiClient.get<T, R, D>('/products', { params });
  }
}
