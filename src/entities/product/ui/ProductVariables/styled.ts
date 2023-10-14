import styled, { css } from 'styled-components';
import { RadioGroup, RadioButton } from '@/shared/ui';

interface RadioButtonStyles {
  $isSize: boolean;
}

export const WrapperVariables = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.lightgray};
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 16px;
`;

export const VariableRadioGroup = styled(RadioGroup)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 4px;
`;

export const VariableRadio = styled(RadioButton)<RadioButtonStyles>`
  ${props =>
    props.$isSize &&
    css`
      ~ label {
        padding: 6px 12px;
      }
    `}
`;
