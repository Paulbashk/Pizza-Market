import type { IPriceBasket } from './IPriceBasket';
import type { IProductBasket } from './IProductBasket';

export interface IOrder {
  countItems: number;
  client: Partial<IOrderClient>;
  price: IPriceBasket;
  items: IProductBasket[];
}

export interface IOrderClient {
  [key: string]: any;
  name: string;
  phone: string;
  city: string;
  street: string;
  house: string;
  houseBody: string;
  entrance: string;
  floor: string;
  apartment: string;
  intercom: string;
  comment: string;
  paymentType: string;
  terms: boolean;
}
