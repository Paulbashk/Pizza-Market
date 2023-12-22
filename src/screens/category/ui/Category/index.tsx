import { notFound } from 'next/navigation';

// service
import { categoryScreenService } from '@/shared/server/api';

// libs
import { getCategoryIdBySlug } from '@/shared/libs/utils/getCategoryIdBySlug';

// components
import { BannerSection } from '@/modules/banners';
import { ProductCardsSection } from '@/modules/products';

interface CategoryScreenParams {
  params: {
    slug?: string;
  };
}

export const CategoryScreen = async ({ params }: CategoryScreenParams) => {
  const { categories, banners } = await categoryScreenService();
  const { slug } = params;

  const categoryId = getCategoryIdBySlug(categories, slug);

  if (categoryId === -1) {
    notFound();
  }

  return (
    <>
      {banners.length > 0 && <BannerSection banners={banners} />}
      <ProductCardsSection category={categories[categoryId]} />
    </>
  );
};
