'use client';

import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    padding-bottom: 8px;
  }

  > span {
    text-decoration: line-through;
    font-size: 14px;
    line-height: 16px;
  }

  p {
    margin: 0;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.18px;
    color: ${props => props.theme.colors.black};

    @media (max-width: ${props => props.theme.breakpoints.SM}px) {
      font-size: 16px;
      line-height: 22px;
    }
  }

  strong {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    letter-spacing: inherit;
    font-weight: 700;
  }
`;
