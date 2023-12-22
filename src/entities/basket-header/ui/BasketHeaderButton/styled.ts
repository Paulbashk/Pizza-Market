'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';

const basketSpan = css`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  line-height: 18px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;

    &::after {
      opacity: 1;
    }
  }
`;

export const BasketLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: auto;
  background-color: ${props => props.theme.colors.yellow};
  padding: 12px 16px;
  border-radius: 24px;
`;

export const Title = styled.span`
  font-weight: 600;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: block;
    height: 20px;
    border-left: 2px solid ${props => props.theme.colors.white};
    margin: 0 10px;
    user-select: none;
  }

  ${basketSpan}
`;

export const Price = styled.span`
  font-weight: 600;
  white-space: nowrap;
  ${basketSpan}
`;
