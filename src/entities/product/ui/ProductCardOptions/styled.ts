import styled, { css } from 'styled-components';
import { RadioGroup, RadioButton } from '@/shared/ui';

interface RadioButtonStyles {
  $isSize: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.lightgray};
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 16px;
  margin-top: auto;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    margin-bottom: 12px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    padding-left: 4px;
    padding-right: 4px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    margin-bottom: 8px;
  }
`;

export const RadioGroupOptions = styled(RadioGroup)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 4px;
`;

export const RadioOption = styled(RadioButton)<RadioButtonStyles>`
  ${props =>
    props.$isSize &&
    css`
      label {
        padding: 6px 12px;
      }
    `}

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    label {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  @media (max-width: 1100px) {
    label {
      padding: 4px 8px;
    }
  }
`;
