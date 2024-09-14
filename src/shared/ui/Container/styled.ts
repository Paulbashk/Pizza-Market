'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${props => props.theme.breakpoints.XL}px) {
    max-width: 1300px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    max-width: 540px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
