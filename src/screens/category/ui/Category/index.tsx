import { GetStaticProps } from 'next';
import axios from 'axios';

// hooks
import { Layout } from '@/shared/ui';

// components
import { SectionBanners } from '@/modules/banners';
import { SectionProducts } from '@/modules/products';
import { Header } from '@/modules/header';

// types
import { IBanner, ICategory, ILogo } from '@/shared/types/interfaces';

export interface CategoryProps {
  categories: ICategory[];
  categoryId: number;
  logo: ILogo;
  banners: IBanner[];
}

const Category = ({ categoryId, categories, logo, banners }: CategoryProps) => {
  // const { query } = useRouter();
  // const { setCategory } = useActions();

  // const { slug } = query;

  console.log('123');

  // setCategory(category.id);

  return (
    <Layout title="Главная">
      <Header categoryId={categoryId} categories={categories} logo={logo} />
      {banners.length > 0 && <SectionBanners banners={banners} />}
      <SectionProducts category={categories[categoryId]} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<CategoryProps> = async () => {
  const { data: categories } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
  );

  const { data: logo } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/logo`,
  );

  const { data: banners } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/banners`,
  );

  const categoryId = 0;

  return {
    props: { categories, logo, banners, categoryId },
    revalidate: 60,
  };
};

export default Category;
