import React from 'react';
import { useSelector } from 'react-redux';

// services
import { productSelect } from '@/entities/products/services/products';
import { filterSelect } from '@/entities/products/services/filter';

// components
import { ProductList } from '@/entities/products/ui/products';
import { Loader, withQueryResolver } from '@/shared/ui';

// assets
import * as S from './styled';

const Products = () => {
  const category = useSelector(filterSelect.category);

  const WithQueryProducts = withQueryResolver(ProductList, {
    actionName: 'fetchProducts',
    arg: { category },
    selector: productSelect.queryState,
  })(
    <S.WrapperLoader>
      <Loader />
    </S.WrapperLoader>,
  );

  return <WithQueryProducts />;
};

export default Products;
