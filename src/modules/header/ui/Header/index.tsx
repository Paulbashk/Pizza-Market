import React from 'react';

// components
import { Container } from '@/shared/ui';
import { Logo, CategoriesList } from '@/modules/header/ui';
import { basketUI } from '@/entities/basket';

// type
import type { ICategory, ILogo } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface HeaderProps {
  categories: ICategory[];
  categoryId: number;
  logo: ILogo;
}

const Header = ({ categoryId, categories, logo }: HeaderProps) => (
  <header className="header">
    <Container>
      <S.WrapperHeader>
        <Logo logo={logo} />
        {categories.length > 0 && (
          <CategoriesList categoryId={categoryId} categories={categories} />
        )}
        <basketUI.BasketPrice />
      </S.WrapperHeader>
    </Container>
  </header>
);

export default Header;
