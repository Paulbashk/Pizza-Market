'use client';

import styled from 'styled-components';

export const WrapperImage = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 16px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    margin-right: 12px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    width: 72px;
    height: 72px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    grid-column: 1;
    grid-row: 1;
  }

  @media (max-width: 400px) {
    margin-right: 8px;
    width: 74px;
    height: 74px;
  }

  img {
    object-fit: contain;
  }
`;
