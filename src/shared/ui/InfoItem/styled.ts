'use client';

import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

  p {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.18px;
    color: ${props => props.theme.colors.black};
  }

  strong {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    letter-spacing: inherit;
    font-weight: 700;
  }
`;
