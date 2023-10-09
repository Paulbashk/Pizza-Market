import Link from 'next/link';
import styled, { css } from 'styled-components';

interface MenuLinkStyles {
  $active: boolean;
}

export const MenuLink = styled(Link)<MenuLinkStyles>`
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
