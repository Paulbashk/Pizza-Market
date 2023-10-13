import ApiClient from '@/shared/api';

export const fetchAll = <T, B>(params: B) =>
  ApiClient.get<T>('/tags', { params });
