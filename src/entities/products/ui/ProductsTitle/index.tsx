import React from 'react';
import { useSelector } from 'react-redux';

// services
import { tagSelect } from '@/entities/products/services/tags';

// assets
import * as S from './styled';

const ProductsTitle = () => {
  const tagFiltered = useSelector(tagSelect.getByIdFilter);

  return (
    <S.ProductsTitle>
      {tagFiltered === undefined ? 'Все' : tagFiltered.name} пиццы
    </S.ProductsTitle>
  );
};

export default ProductsTitle;
