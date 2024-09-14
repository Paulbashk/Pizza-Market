'use client';

import styled from 'styled-components';

export const WrapperDelete = styled.div`
  margin-left: auto;

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    grid-row: 3;
    grid-column: 2;
    margin: auto 0 auto auto;
  }
`;
