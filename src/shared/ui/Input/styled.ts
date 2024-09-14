'use client';

import styled from 'styled-components';

interface IInputControlStyles {
  $isError: boolean;
}

export const InputControl = styled.div<IInputControlStyles>`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  input {
    display: block;
    width: 100%;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.lightgray};
    color: ${props =>
      props.$isError ? props.theme.colors.red : props.theme.colors.black};
    padding: 14px 16px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 400;
    border: 1px solid
      ${props =>
        props.$isError ? props.theme.colors.red : props.theme.colors.lightgray};

    @media (max-width: ${props => props.theme.breakpoints.XL}px) {
      font-size: 16px;
      line-height: 18px;
    }

    @media (max-width: ${props => props.theme.breakpoints.SM}px) {
      font-size: 14px;
      line-height: 16px;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: inherit;
      line-height: inherit;
      font-family: inherit;
      color: ${props => (props.$isError ? props.theme.colors.red : '#565656')};
    }
  }

  p {
    margin: 0;
  }
`;
