export interface IProduct {
  readonly id: number;
  category: number;
  tag: number;
  priority: number;
  title: string;
  price: number;
  oldPrice: number;
  image: string;
  options?: IProductOptions[];
}

export interface IProductOptions {
  name: string;
  activeItem?: string;
  items: IProductOption[];
}

export interface IProductOption {
  label: string;
  price: number;
}

export type ITransformOption = {
  [name: string]: IProductOption;
};
