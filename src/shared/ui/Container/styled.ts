'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${props => props.theme.breakpoints.XXL}px) {
    max-width: 1140px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    max-width: 960px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    max-width: 720px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    max-width: 540px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-right: -15px;
  margin-left: -15px;
`;
