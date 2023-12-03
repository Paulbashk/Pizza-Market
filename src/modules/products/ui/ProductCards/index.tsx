'use client';

// services
import { productUI } from '@/entities/product';
import { productFilterUI } from '@/features/product/byFiltered';
import { basketUI } from '@/features/product/addBasket';

interface ProductsProps {
  categoryId: number;
}

const { ProductList, withQueryProductList } = productUI;
const { listWithFiltered } = productFilterUI;
const { listWithHandleBasket } = basketUI;

export const ProductCards = ({ categoryId }: ProductsProps) => {
  const ProductListWithBasket = listWithHandleBasket(ProductList);
  const ProductListWithFiltered = listWithFiltered(ProductListWithBasket);
  const ProductListWithQuery = withQueryProductList(
    ProductListWithFiltered,
    categoryId,
  );

  return <ProductListWithQuery />;
};
