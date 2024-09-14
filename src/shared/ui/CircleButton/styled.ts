'use client';

import styled, { css } from 'styled-components';
import { CircleButtonColors } from '.';

interface CircleButtonStyles {
  $color: CircleButtonColors;
}

export const CircleButton = styled.button<CircleButtonStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: transparent;
  outline: none;
  border-width: 2px;
  border-style: solid;
  transition-property: border-color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    width: 26px;
    height: 26px;
    padding: 3px;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    outline: none;
  }

  ${props => {
    switch (props.$color) {
      case CircleButtonColors.orange: {
        return css`
          border-color: ${props.theme.colors.orange};
          background-color: transparent;

          &:hover {
            background-color: ${props.theme.colors.orange};
          }
        `;
      }
      case CircleButtonColors.gray: {
        return css`
          border-color: ${props.theme.colors.gray};
          background-color: transparent;

          &:hover {
            border-color: ${props.theme.colors.dark};
            background-color: ${props.theme.colors.dark};
          }
        `;
      }
      default:
        break;
    }
  }}

  svg {
    transition-property: fill, stroke;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
`;
