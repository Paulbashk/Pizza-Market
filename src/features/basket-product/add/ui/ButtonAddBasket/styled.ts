'use client';

import { styled } from 'styled-components';
import { Button as ImportButton } from '@/shared/ui';

export const Button = styled(ImportButton)`
  display: flex;
  align-items: center;
  min-width: 142px;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  outline: unset;

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    min-width: 122px;
    padding: 6px 8px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    min-width: 118px;
    padding: 7px 6px;
    font-size: 14px;
    line-height: 14px;
  }

  &:hover span {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.yellow};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.yellow};
    min-width: 18px;
    min-height: 18px;
    font-size: 12px;
    line-height: 12px;
    padding-top: 1px;
    font-weight: 700;
    letter-spacing: 0.015em;
    color: ${props => props.theme.colors.white};
    transition-property: color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;

    @media (max-width: ${props => props.theme.breakpoints.LG}px) {
      font-size: 11px;
      line-height: 11px;
      margin-left: 3px;
    }

    @media (max-width: ${props => props.theme.breakpoints.SM}px) {
      font-size: 10px;
      line-height: 10px;
      margin-left: 3px;
      min-width: 17px;
      min-height: 16px;
    }
  }
`;
