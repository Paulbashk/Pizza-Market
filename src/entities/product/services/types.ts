import { EntityState } from '@reduxjs/toolkit';
import type { QueryParams, QueryState } from '@/shared/libs/types';

export namespace Product {
  export type State = QueryState;

  export type FetchAllRequest = QueryParams<{
    category?: number;
    tag?: number;
  }>;

  export type FetchAllResponse = Item[];

  export type MakeSelectQuery = EntityState<Item>;

  export interface Item {
    readonly id: number;
    category: number;
    tag: number;
    priority: number;
    title: string;
    price: number;
    image: string;
    options?: Options[];
  }

  export interface Options {
    name: string;
    activeItem?: string;
    items: Option[];
  }

  export interface Option {
    label: string;
    price: number;
  }

  export type TransformOption = {
    [name: string]: Option;
  };
}
