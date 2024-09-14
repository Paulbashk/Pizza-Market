import type { AxiosResponse } from 'axios';
import { ApiClient } from '@/shared/api';
import type { TFetchGetAllResponse, TFetchGetAllRequest } from './types';

export class TagService {
  public static async fetchGetAll<
    T = TFetchGetAllResponse,
    R = AxiosResponse<T>,
    D = TFetchGetAllRequest,
  >(params: D) {
    return ApiClient.get<T, R, D>('/tags', { params });
  }
}
