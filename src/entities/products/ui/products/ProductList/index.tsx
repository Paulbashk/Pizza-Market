import React from 'react';
import { useSelector } from 'react-redux';

// services
import { productSelect } from '@/entities/products/services/products';

// components
import { Product } from '@/entities/products/ui/products';

// assets
import * as S from './styled';

const ProductList = () => {
  const productList = useSelector(productSelect.getFilteredIds);

  return (
    <S.List>
      {productList.map(id => (
        <Product key={id} id={id} />
      ))}
    </S.List>
  );
};

export default ProductList;
