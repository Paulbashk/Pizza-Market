import React from 'react';
import { useSelector } from 'react-redux';

// services
import { selects } from '@/features/product/byFiltered/model/';

interface ProductsTitleProps {
  categoryName: string;
}

const ProductsTitle = ({ categoryName }: ProductsTitleProps) => {
  const { name: nameTag } = useSelector(selects.getTagByFilter);

  return (
    <>
      {nameTag} {categoryName}
    </>
  );
};

export default ProductsTitle;
