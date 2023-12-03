import { type Tag } from '@/entities/tag/model/types';

export type FetchGetAllRequest = {
  category: number;
};

export type FetchGetAllResponse = Tag.Item[];
