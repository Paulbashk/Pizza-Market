'use client';

import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    row-gap: 12px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    row-gap: 8px;
  }
`;
