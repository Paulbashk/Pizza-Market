'use client';

import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;

  &::after,
  &::before {
    content: '';
    position: relative;
  }

  span,
  &::after,
  &::before {
    display: block;
    width: 20px;
    border-bottom: 3px solid ${props => props.theme.colors.dark};
  }

  span {
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: linear;
  }

  &::after,
  &::before {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: linear;
  }
`;
