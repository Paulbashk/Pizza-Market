import type { AxiosResponse } from 'axios';
import { ApiClient } from '@/shared/api';
import type { TAddOrderRequest, TAddOrderResponse } from './types';

export class OrderService {
  public static async addOrder<
    T = TAddOrderResponse,
    R = AxiosResponse<T>,
    D = TAddOrderRequest,
  >(data: D): Promise<R> {
    return ApiClient.post<T, R, D>('/orders', data);
  }
}
