import { type Draft, type EntityId } from '@reduxjs/toolkit';
import { type ProductBasket } from '@/entities/product-basket/model/types';
import { type ProductTypes } from '@/entities/product-basket/@x/product';
import { objectComparsion } from '@/shared/libs/utils';

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
