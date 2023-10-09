import type { QueryState } from '@/shared/libs/types';
import { EntityState } from '@reduxjs/toolkit';
import { StaticImageData } from 'next/image';

export namespace Banners {
  export type State = QueryState;

  export type FetchAllRequest = void;
  export type FetchAllResponse = Item[];

  export type Item = {
    id: number;
    image: StaticImageData;
    title: string;
    desc: string;
  };

  export type MakeSelectQuery = EntityState<Item>;
}
