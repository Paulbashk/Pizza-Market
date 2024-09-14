import { type IOrder } from '@/shared/types/interfaces';

export type TAddOrderRequest = IOrder;

export type TAddOrderResponse = IOrder & {
  readonly id: number;
};
