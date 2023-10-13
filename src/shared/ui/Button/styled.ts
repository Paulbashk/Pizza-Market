import styled, { css } from 'styled-components';
import { ButtonColors } from '.';

interface ButtonStyles {
  $color: ButtonColors;
  $active: boolean;
}

export const Button = styled.button<ButtonStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  transition-property: color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  &:hover {
    cursor: pointer;
  }

  &:active {
    outline: none;
    border: unset;
  }

  ${props => {
    const cssHoverGray = css`
      background-color: ${props.theme.colors.dark};
      color: ${props.theme.colors.white};
    `;

    switch (props.$color) {
      case ButtonColors.gray: {
        return css`
          color: ${props.theme.colors.dark};
          background-color: ${props.theme.colors.lightgray};
          border-radius: 32px;
          padding: 10px 16px;
          font-size: 16px;
          line-height: 19px;
          font-weight: 700;
          opacity: 1;

          ${props.$active &&
          css`
            ${cssHoverGray}
            transition: opacity 0.3s ease;

            &:hover {
              opacity: 0.8;
            }
          `}

          &:hover {
            ${cssHoverGray}
          }
        `;
      }
      case ButtonColors.transparent: {
        return css`
          border-color: ${props.theme.colors.yellow};
          border-style: solid;
          border-width: 2px;
          border-radius: 16px;
          font-size: 15px;
          line-height: 18px;
          font-weight: 700;
          letter-spacing: 0.015em;
          color: ${props.theme.colors.yellow};
          background-color: transparent;
          padding: 8px 12px;

          &:active {
            border-color: ${props.theme.colors.yellow};
            border-style: solid;
            border-width: 2px;
          }

          &:hover {
            background-color: ${props.theme.colors.yellow};
            color: ${props.theme.colors.white};
          }
        `;
      }
      default:
        break;
    }
  }}
`;
