import styled from 'styled-components';
import {
  RadioButton as RadioButtonImport,
  RadioGroup as RadioGroupImport,
  Textarea as TextareaImport,
  Input as InputImport,
} from '@/shared/ui';
import { FormBlock as FormBlockImport } from '@/entities/block-form';

export const FormBlock = styled(FormBlockImport)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    row-gap: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    row-gap: 16px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    row-gap: 12px;
  }

  ${FormBlock} {
    &:first-child {
      margin-bottom: 4px;
    }
  }
`;

export const Input = styled(InputImport)`
  width: 100%;
`;

export const Textarea = styled(TextareaImport)`
  width: 100%;
`;

export const RadioButton = styled(RadioButtonImport)``;

export const RadioGroup = styled(RadioGroupImport)`
  display: flex;

  ${RadioButton} {
    &:first-child {
      label {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &:last-child {
      label {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
`;
