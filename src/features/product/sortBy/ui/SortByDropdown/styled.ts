'use client';

import hexRgb from 'hex-rgb';
import styled, { css } from 'styled-components';

interface IDropdownItemStyles {
  $active: boolean;
}

export const Wrapper = styled.div`
  margin-left: auto;
  position: relative;
  z-index: 10;
`;

export const DropdownItem = styled.li<IDropdownItemStyles>`
  ${props =>
    props.$active &&
    css`
      font-weight: 700;
      background: ${hexRgb(props.theme.colors.yellow, {
        alpha: 0.25,
        format: 'css',
      })};

      @media (max-width: ${props.theme.breakpoints.LG}px) {
        min-width: 220px;
      }
    `}
`;
