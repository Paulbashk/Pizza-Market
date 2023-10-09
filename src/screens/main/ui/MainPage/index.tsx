import React from 'react';

// components
import { Layout } from '@/shared/ui';
import SectionBanners from '@/modules/banners';
import SectionProducts from '@/modules/products';
import Header from '@/modules/header';

const MainPage = () => (
  <Layout title="Главная">
    <Header />
    <SectionBanners />
    <SectionProducts />
  </Layout>
);

export default MainPage;
