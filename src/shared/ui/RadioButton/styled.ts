import styled, { css } from 'styled-components';
import { RadioColors, RadioSizes } from '.';

interface RadioGroupStyles {
  $color: RadioColors;
  $sizeButton: RadioSizes;
}

export const RadioGroup = styled.div<RadioGroupStyles>`
  display: flex;

  input {
    position: absolute;
    opacity: 0;
    -webkit-appearance: none;
    appearance: none;
    pointer-events: none;
    user-select: none;
  }

  ${props => {
    const sizesCss = {
      [RadioSizes.min]: css`
        label {
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 14px;
          line-height: 17px;
          font-weight: 700;
        }
      `,
      [RadioSizes.large]: css`
        label {
          border-radius: 16px;
          font-size: 16px;
          line-height: 18px;
          font-weight: 400;
          padding: 11px 16px;

          @media (max-width: ${props.theme.breakpoints.SM}px) {
            font-size: 14px;
            line-height: 16px;
          }
        }
      `,
    };

    const colorCss = {
      [RadioColors.gray]: css`
        label {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${props.theme.colors.lightgray};
          color: ${props.theme.colors.black};
          position: relative;
          transition-property: color, background-color;
          transition-duration: 0.3s;
          transition-timing-function: ease;
          user-select: none;

          &:hover {
            cursor: pointer;
          }
        }

        label:hover,
        input:checked ~ label {
          background-color: ${props.theme.colors.yellow};
          color: ${props.theme.colors.white};
        }
      `,
    };

    const size = sizesCss[props.$sizeButton];
    const color = colorCss[props.$color];

    return [color, size];
  }}
`;
