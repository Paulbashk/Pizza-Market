import { EntityId, EntityState } from '@reduxjs/toolkit';
import type { QueryParams, QueryState } from '@/shared/libs/types';

export namespace Tag {
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

  export type Variable = EntityId | TagVariables.ALL;

  export type MakeSelectQuery = EntityState<Item>;
}

export enum TagVariables {
  ALL = 'ALL',
}
