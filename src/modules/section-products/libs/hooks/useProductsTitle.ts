import { useSelector } from 'react-redux';
import { productFilterModel } from '@/features/product/sortBy';

export const useProductsTitle = (categoryName: string): string => {
  const item = useSelector(productFilterModel.selects.getTagByFilter);

  const name = item !== undefined ? item.name : 'Все';

  return `${name} ${categoryName}`;
};
