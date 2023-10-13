import hexRgb from 'hex-rgb';
import styled, { css } from 'styled-components';

interface DropdownItemStyles {
  $active: boolean;
}

export const ProductsSorted = styled.div`
  margin-left: auto;
`;

export const DropdownItem = styled.li<DropdownItemStyles>`
  ${props =>
    props.$active &&
    css`
      font-weight: 700;
      background: ${hexRgb(props.theme.colors.yellow, {
        alpha: 0.25,
        format: 'css',
      })};
    `}
`;
