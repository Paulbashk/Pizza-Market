import Category, { type CategoryProps } from '@/screens/category/ui';

export { getStaticProps } from '@/screens/category/ui/Category';

interface IndexPageProps extends CategoryProps {}

export default function IndexPage(props: IndexPageProps) {
  return <Category {...props} />;
}
