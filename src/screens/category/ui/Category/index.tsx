import { notFound } from 'next/navigation';

// service
import { categoryScreenService } from '@/shared/server/api';

// libs
import { getCategoryIdBySlug } from '@/shared/libs/utils/getCategoryIdBySlug';

// components
import { SectionBanner } from '@/modules/section-banners';
import { SectionProducts } from '@/modules/section-products';
import { Products } from '../Products';
import { Tags } from '../Tags';

interface ICategoryScreenProps {
  params: {
    slug?: string;
  };
}

export const CategoryScreen = async ({ params }: ICategoryScreenProps) => {
  const { categories, banners } = await categoryScreenService();
  const { slug } = params;

  const categoryId = getCategoryIdBySlug(categories, slug);

  if (categoryId === -1) {
    notFound();
  }

  return (
    <>
      {banners.length > 0 && <SectionBanner banners={banners} />}
      <SectionProducts
        category={categories[categoryId]}
        tagListRender={id => <Tags categoryId={id} />}
        productListRender={id => <Products categoryId={id} />}
      />
    </>
  );
};
