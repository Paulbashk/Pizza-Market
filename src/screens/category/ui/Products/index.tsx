'use client';

// components
import { productListUI } from '@/modules/product-list';

const {
  ProductList,
  withFilteredProductList,
  withQueryProductList,
  withAddButtonBasketProductList,
} = productListUI;

interface IProductsProps {
  categoryId: number;
}

export const Products = ({ categoryId }: IProductsProps) => {
  const ProductListWithBasket = withAddButtonBasketProductList(ProductList);
  const ProductListWithFiltered = withFilteredProductList(
    ProductListWithBasket,
  );
  const ProductListWithQuery = withQueryProductList(
    ProductListWithFiltered,
    categoryId,
  );

  return <ProductListWithQuery />;
};
