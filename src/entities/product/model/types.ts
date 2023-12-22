import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { QueryState } from '@/shared/libs/types';
import type { ReactElement } from 'react';

export namespace Product {
  export type State = QueryState;

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

  export interface Price {
    total: number;
    options?: TransformOption;
  }

  export interface RenderButtonProps {
    id: EntityId;
    title: string;
    image: string;
    price: Price;
  }

  export type RenderButton = (product: RenderButtonProps) => ReactElement;
}
