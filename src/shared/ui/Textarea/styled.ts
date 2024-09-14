'use client';

import styled from 'styled-components';

export const TextareaControl = styled.div`
  textarea {
    display: block;
    width: 100%;
    min-height: 130px;
    border-radius: 16px;
    max-height: 130px;
    padding: 14px 16px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 400;
    background-color: ${props => props.theme.colors.lightgray};
    color: #000;
    border: none;
    resize: none;

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

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: inherit;
      line-height: inherit;
      font-family: inherit;
      color: #565656;
    }
  }
`;
