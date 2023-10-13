import React from 'react';

// services
import { productSelect } from '@/entities/product';

// components
import { Loader, withQueryResolver } from '@/shared/ui';
import { productsFilterUI } from '@/features/filter-products';

// assets
import * as S from './styled';

interface ProductsProps {
  categoryId: number;
}

const { ProductsFiltered } = productsFilterUI;

const Products = ({ categoryId }: ProductsProps) => {
  const WithQueryProducts = withQueryResolver(ProductsFiltered, {
    actionName: 'fetchProducts',
    arg: { category: categoryId },
    selector: productSelect.queryState,
  })(
    <S.WrapperLoader>
      <Loader />
    </S.WrapperLoader>,
  );

  return <WithQueryProducts />;
};

export default Products;
