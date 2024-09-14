'use client';

import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 32px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    column-gap: 32px;
    row-gap: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    row-gap: 24px;
    column-gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 260px;
    margin: 0 auto;
  }
`;
