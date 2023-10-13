import React from 'react';
import { useSelector } from 'react-redux';

// services
import { filterSelect } from '@/features/filter-products';

// components
import { productUI } from '@/entities/product';

const { ProductList } = productUI;

const ProductsFiltered = () => {
  const productList = useSelector(filterSelect.getProductFilterIds);

  return <ProductList ids={productList} />;
};

export default ProductsFiltered;
