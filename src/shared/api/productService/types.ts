import type { IProduct } from '../../types/interfaces';

export type TFetchGetAllRequest = {
  category: number;
};

export type TFetchGetAllResponse = IProduct[];
