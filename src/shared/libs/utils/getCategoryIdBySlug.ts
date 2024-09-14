import { type ICategory } from '../../types/interfaces';

export const getCategoryIdBySlug = (
  categories: ICategory[],
  slug: string | undefined,
): number => {
  const searchSlug = slug === undefined ? '/' : slug.replace('', '/');

  const category = categories.find(_category => _category.slug === searchSlug);

  return category ? category.id : -1;
};
