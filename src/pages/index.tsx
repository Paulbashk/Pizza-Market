import { Category, type CategoryProps } from '@/screens/category';

interface IndexPageProps extends CategoryProps {}

export default function IndexPage(props: IndexPageProps) {
  return <Category {...props} />;
}

export { getStaticProps } from '@/screens/category';
