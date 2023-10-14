import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// services
import { productModel } from '@/entities/product';

// components
import { Loader, Error } from '@/shared/ui';
import { productFilterUI } from '@/features/product/byFiltered';

// hooks
import { useAppDispatch } from '@/shared/libs/hooks';

// assets
import * as S from './styled';

interface ProductsProps {
  categoryId: number;
}

const { ProductsFiltered } = productFilterUI;

const Products = ({ categoryId }: ProductsProps) => {
  const { isLoading, isError, error } = useSelector(
    productModel.selects.queryState,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      productModel.asyncActions.getProductsThunk({ category: categoryId }),
    );
  }, []);

  if (isLoading) {
    return (
      <S.WrapperLoader>
        <Loader />
      </S.WrapperLoader>
    );
  }

  if (isError) {
    return <Error>{error}</Error>;
  }

  return <ProductsFiltered />;
};

export default Products;
