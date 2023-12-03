import { type Product } from '@/entities/product/model/types';

export type FetchGetAllRequest = {
  category: number;
};

export type FetchGetAllResponse = Product.Item[];
