// components
import { Container } from '@/shared/ui';
import { Logo } from '@/entities/logo';
import { CategoriesMenu } from '@/entities/categories-menu';
import { HeaderBasket } from '@/modules/header/ui/HeaderBasket';

// type
import type { ICategory, ILogo } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface HeaderProps {
  categories: ICategory[];
  logo: ILogo;
}

export const Header = ({ categories, logo }: HeaderProps) => (
  <S.Header>
    <Container>
      <S.WrapperHeader>
        <Logo logo={logo} />
        {categories.length > 0 && <CategoriesMenu categories={categories} />}
        <HeaderBasket />
      </S.WrapperHeader>
    </Container>
  </S.Header>
);
