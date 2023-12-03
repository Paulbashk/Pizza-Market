import { useSelector } from 'react-redux';

// services
import { selects } from '@/features/product/byFiltered/model/';

export const useProductsTitle = (categoryName: string) => {
  const item = useSelector(selects.getTagByFilter);

  const name = item !== undefined ? item.name : 'Все';

  return `${name} ${categoryName}`;
};
