import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { TQueryState } from '@/shared/types';
import type { ITag } from '@/shared/types/interfaces';

export namespace Tag {
  export type State = TQueryState;

  export interface Item extends ITag {}

  export type Variable = EntityId | TagVariables.ALL;

  export type MakeSelectQuery = EntityState<Item>;
}

export enum TagVariables {
  ALL = 'ALL',
}
