import { EntityState } from '@reduxjs/toolkit';
import type { QueryParams, QueryState } from '@/shared/libs/types';

export namespace Tags {
  export type State = QueryState;

  export type FetchAllRequest = QueryParams<{
    category?: number;
  }>;

  export type FetchAllResponse = Item[];

  export interface Item {
    readonly id: number;
    category: number;
    name: string;
  }

  export type MakeSelectQuery = EntityState<Item>;
}
