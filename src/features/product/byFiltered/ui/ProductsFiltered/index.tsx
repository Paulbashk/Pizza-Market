import React from 'react';
import { useSelector } from 'react-redux';

// services
import { selects } from '@/features/product/byFiltered/model/';

// components
import { ProductList } from '@/entities/product';

const ProductsFiltered = () => {
  const productList = useSelector(selects.getProductFilterIds);

  return <ProductList ids={productList} />;
};

export default ProductsFiltered;
