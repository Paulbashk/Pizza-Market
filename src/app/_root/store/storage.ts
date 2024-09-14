/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { type WebStorage } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => ({
  getItem(_key: any): Promise<null> {
    return Promise.resolve(null);
  },
  setItem(_key: any, value: any): Promise<any> {
    return Promise.resolve(value);
  },
  removeItem(_key: any): Promise<void> {
    return Promise.resolve();
  },
});

type TStorage =
  | WebStorage
  | {
      getItem(_key: any): Promise<null>;
      setItem(_key: any, value: any): Promise<any>;
      removeItem(_key: any): Promise<void>;
    };

export const storage: TStorage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();
