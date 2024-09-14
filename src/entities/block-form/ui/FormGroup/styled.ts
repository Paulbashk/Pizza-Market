'use client';

import styled, { css } from 'styled-components';
import { type TFormGroupSizes } from '.';

interface IGroupStyles {
  $size: TFormGroupSizes;
}

const sizesCss = {
  default: css`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;

    @media (max-width: ${props => props.theme.breakpoints.XL}px) {
      column-gap: 20px;
    }

    @media (max-width: ${props => props.theme.breakpoints.MD}px) {
      column-gap: 16px;
    }

    @media (max-width: ${props => props.theme.breakpoints.SM}px) {
      column-gap: 8px;
    }

    @media (max-width: 460px) {
      grid-template-columns: 1fr;
    }
  `,
  min: css`
    grid-template-columns: repeat(3, 1fr);
    max-width: 55.84%;
    min-width: 430px;
    column-gap: 20px;

    @media (max-width: ${props => props.theme.breakpoints.MD}px) {
      width: 100%;
      column-gap: 16px;
    }

    @media (max-width: ${props => props.theme.breakpoints.SM}px) {
      column-gap: 8px;
      min-width: unset;
      max-width: unset;
    }
  `,
  full: css`
    display: flex;
    flex-direction: column;
  `,
};

export const Group = styled.div<IGroupStyles>`
  display: grid;
  row-gap: 16px;
  ${props => sizesCss[props.$size]}

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    row-gap: 12px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    row-gap: 8px;
  }
`;
