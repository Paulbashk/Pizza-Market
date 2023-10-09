import ApiClient from '@/shared/api';

export const fetchAll = <T, B = void>(params?: B) =>
  ApiClient.get<T>('/banners', { params });
