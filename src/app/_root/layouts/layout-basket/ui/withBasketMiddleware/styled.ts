'use client';

import styled, { css } from 'styled-components';
import { validateFormUI } from '@/features/react-form';
import { ButtonLink, Error as ErrorImport } from '@/shared/ui';

const { ValidateCheckbox, ValidateButtonWithError } = validateFormUI;

const cssButton = css`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Checkbox = styled(ValidateCheckbox)`
  margin-bottom: 20px;
`;

export const CheckboxText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 16px;

  > a {
    font-size: inherit;
    line-height: inherit;
    color: ${props => props.theme.colors.yellow};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BasketButton = styled(ValidateButtonWithError)`
  button {
    ${cssButton}

    &:disabled {
      background-color: ${props => props.theme.colors.dark};
      opacity: 0.8;

      &:hover {
        cursor: not-allowed;
      }
    }
  }
`;

export const BasketButtonLink = styled(ButtonLink)`
  ${cssButton}
`;

export const Error = styled(ErrorImport)`
  font-size: 14px;
  line-height: 18px;
  text-align: justify;
`;
