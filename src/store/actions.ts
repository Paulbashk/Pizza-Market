import {
  actionsBanners,
  fetchBanners,
} from '@/entities/banners/services/banners';
import { actionsFilter } from '@/entities/products/services/filter';
import {
  actionsProducts,
  fetchProducts,
} from '@/entities/products/services/products';
import { actionsTags, fetchTags } from '@/entities/products/services/tags';

export const asyncActions = {
  fetchBanners,
  fetchProducts,
  fetchTags,
};

export type AsyncActionNames = keyof typeof asyncActions;
export type AsyncActionArgs = Parameters<
  (typeof asyncActions)[AsyncActionNames]
>[0];

export default {
  ...actionsProducts,
  ...actionsTags,
  ...actionsBanners,
  ...actionsFilter,
} as const;
