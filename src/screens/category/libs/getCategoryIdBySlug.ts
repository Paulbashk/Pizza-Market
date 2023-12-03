import { ICategory } from '@/shared/types/interfaces';

export const getCategoryIdBySlug = (
  categories: ICategory[],
  slug: string | undefined,
): number => {
  const searchSlug = slug === undefined ? 'index' : slug;

  const category = categories.find(_category => _category.slug === searchSlug);

  return category ? category.id : -1;
};
