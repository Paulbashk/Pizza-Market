import { type Metadata } from 'next';
import type { ReactNode } from 'react';
import RootProvides from '@/app/_root/provides';

export const metadata: Metadata = {
  title: 'SUPPER PIZZA - очень вкусная пицца',
  description:
    'Самая вкусная пицца, напитки, закуски со скидкой по промокоду у нас',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <RootProvides>
          <main>{children}</main>
        </RootProvides>
      </body>
    </html>
  );
}
