// type
import type { IMenuItem, ILogo } from '@/shared/types/interfaces';

// components
import { Container } from '@/shared/ui';
import { Logo } from '@/entities/logo';
import { HeaderMenuIsDesktop } from '../HeaderMenuIsDesktop';
import { HeaderButtonIsMobile } from '../HeaderButtonIsMobile';
import { HeaderHamburgerNotDesktop } from '../HeaderHamburgerNotDesktop';

// assets
import * as S from './styled';

interface IHeaderProps {
  menuItems: IMenuItem[];
  logo: ILogo;
}

export const Header = ({ menuItems, logo }: IHeaderProps) => (
  <S.Header>
    <Container>
      <S.WrapperHeader>
        <Logo logo={logo} />
        <HeaderMenuIsDesktop menuItems={menuItems} />
        <HeaderButtonIsMobile />
        <HeaderHamburgerNotDesktop menuItems={menuItems} />
      </S.WrapperHeader>
    </Container>
  </S.Header>
);
