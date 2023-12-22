import { type Metadata } from 'next';
import type { ReactNode } from 'react';
import RootProvides from '@/app/_root/provides';

// services
import { headerService } from '@/shared/server/api';

// components
import { Header } from '@/modules/header';

export const metadata: Metadata = {
  title: 'SUPPER PIZZA - очень вкусная пицца',
  description:
    'Самая вкусная пицца, напитки, закуски со скидкой по промокоду у нас',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const { categories, logo } = await headerService();

  return (
    <html lang="ru">
      <body>
        <RootProvides>
          <main>
            <Header categories={categories} logo={logo} />
            {children}
          </main>
        </RootProvides>
      </body>
    </html>
  );
}
