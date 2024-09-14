'use client';

import styled from 'styled-components';
import hexRgb from 'hex-rgb';

const checkmarkIcon =
  // eslint-disable-next-line max-len
  "url(\"data:image/svg+xml,%3Csvg width='14' height='10' viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.15789 7.14286L12.5263 0L14 1.42857L5.15789 10L0 5L1.47368 3.57143L5.15789 7.14286Z' fill='white'/%3E%3C/svg%3E%0A\")";

interface ICheckboxControlStyles {
  $isError: boolean;
}

export const CheckboxControl = styled.label<ICheckboxControlStyles>`
  position: relative;
  display: flex;
  align-items: flex-start;
  column-gap: 18px;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;
    border-radius: 4px;
    border: 2px solid
      ${props =>
        props.$isError ? props.theme.colors.red : props.theme.colors.yellow};
    background-color: transparent;
    margin-top: 4px;
    transition-property: box-shadow, background-color, border-color, opacity;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    position: relative;

    &::after {
      content: '';
      background-image: ${checkmarkIcon};
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 14px;
      width: 100%;
      height: 100%;
      transition-property: opacity;
      transition-duration: 0.3s;
      transition-timing-function: linear;
      opacity: 0;
    }

    &:focus {
      border-color: ${props => props.theme.colors.black};
    }

    &:hover,
    &:active {
      box-shadow: 0 0 12px
        ${props =>
          hexRgb(props.theme.colors.yellow, { alpha: 0.5, format: 'css' })};
      background-color: ${props => props.theme.colors.yellow};
      opacity: 0.6;

      &::after {
        opacity: 1;
      }
    }
  }

  input {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 0;
    height: 0;

    &:checked {
      + [Wrapper]::after {
        border-color: red;
      }
    }
  }

  input:checked ~ span {
    background-color: ${props => props.theme.colors.yellow};

    &:hover,
    &:active {
      box-shadow: unset;
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }
`;
