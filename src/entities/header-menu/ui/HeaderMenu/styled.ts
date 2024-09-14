import Link from 'next/link';
import { memo } from 'react';
import { Menu } from '@/shared/ui';
import { styled, css } from 'styled-components';

export const StyledMenu = styled(Menu)`
  display: flex;
  align-items: center;
  list-style: none;
  column-gap: 32px;
  margin: 0;
  padding: 0;
`;

interface MenuLinkStyles {
  $active: boolean;
}

const LinkMemo = memo(Link);

export const MenuLink = styled(LinkMemo)<MenuLinkStyles>`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.dark};
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.yellow};
  }

  ${props =>
    props.$active &&
    css`
      color: ${props.theme.colors.yellow};
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    `}
`;
