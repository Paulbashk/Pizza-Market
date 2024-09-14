'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px 40px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    padding: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    padding: 16px;
  }

  h1 {
    line-height: 1;

    @media (max-width: ${props => props.theme.breakpoints.MD}px) {
      font-size: 28px;
    }

    @media (max-width: ${props => props.theme.breakpoints.SM}px) {
      font-size: 24px;
    }
  }

  h2 {
    @media (max-width: ${props => props.theme.breakpoints.SM}px) {
      font-size: 20px;
    }
  }
`;
