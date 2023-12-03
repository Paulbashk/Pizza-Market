import { notFound } from 'next/navigation';

// components
import { BannerSection } from '@/modules/banners';
import { ProductCardsSection } from '@/modules/products';
import { Header } from '@/modules/header';

// libs
import { getSettings } from '@/screens/category/api';
import { getCategoryIdBySlug } from '@/screens/category/libs';

interface CategoryScreenParams {
  params: {
    slug?: string;
  };
}

export const CategoryScreen = async ({ params }: CategoryScreenParams) => {
  const { categories, logo, banners } = await getSettings();
  const { slug } = params;

  const categoryId = getCategoryIdBySlug(categories, slug);

  if (categoryId === -1) {
    notFound();
  }

  return (
    <>
      <Header categoryId={categoryId} categories={categories} logo={logo} />
      {banners.length > 0 && <BannerSection banners={banners} />}
      <ProductCardsSection category={categories[categoryId]} />
    </>
  );
};
