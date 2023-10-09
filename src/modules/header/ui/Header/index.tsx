import React from 'react';

// components
import { Container } from '@/shared/ui';
import { Logo } from '@/modules/header/ui';
import CategoriesMenu from '@/entities/categories';
import BasketPrice from '@/entities/basket';

// assets
import { LogoImg } from '@/shared/libs/assets/images';
import * as S from './styled';

const Header = () => (
  <header className="header">
    <Container>
      <S.WrapperHeader>
        {LogoImg && <Logo logoImg={LogoImg} />}
        <CategoriesMenu />
        <BasketPrice />
      </S.WrapperHeader>
    </Container>
  </header>
);

export default Header;
