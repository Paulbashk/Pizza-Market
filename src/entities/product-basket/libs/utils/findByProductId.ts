import { type Draft, type EntityId } from '@reduxjs/toolkit';
import { objectComparsion } from '@/shared/libs/utils';
import { type ProductTypes } from '../../@x/product';
import { type ProductBasket } from '../../model/types';

export const findByProductId = (
  entities: (Draft<ProductBasket.Product> | undefined)[],
  productId: EntityId,
  options: ProductTypes.TransformOption | undefined,
): Draft<ProductBasket.Product> | undefined =>
  entities.find(
    product =>
      product &&
      product.productId === productId &&
      (options !== undefined
        ? objectComparsion(product.options!, options)
        : true),
  );
