import styled, { css } from 'styled-components';
import { RadioColors } from '.';

interface RadioGroupStyles {
  $color: RadioColors;
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
    switch (props.$color) {
      case RadioColors.gray: {
        return css`
          label {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px 16px;
            background-color: ${props.theme.colors.lightgray};
            border-radius: 8px;
            font-size: 14px;
            line-height: 17px;
            font-weight: 700;
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
          input:checked + label {
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
