import React from 'react';
import { useSelector } from 'react-redux';

// services
import { filterSelect } from '@/features/filter-products';

interface ProductsTitleProps {
  categoryName: string;
}

const ProductsTitle = ({ categoryName }: ProductsTitleProps) => {
  const { name: nameTag } = useSelector(filterSelect.getTagByFilter);

  return (
    <>
      {nameTag} {categoryName}
    </>
  );
};

export default ProductsTitle;
