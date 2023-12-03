export const formatSlugAndIsCurrentPath = (
  categorySlug: string,
  pathname: string,
): { slug: string; isPath: boolean } => {
  const slug = categorySlug === 'index' ? '/' : `/${categorySlug}`;

  return {
    slug,
    isPath: pathname === slug,
  };
};
