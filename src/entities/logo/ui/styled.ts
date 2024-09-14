'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  user-select: none;
  margin-right: 32px;
  color: ${props => props.theme.colors.dark};

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    margin-right: 16px;
  }

  &::after {
    content: '';
    display: block;
    height: 40px;
    margin-left: 32px;
    border-left: 1px solid ${props => props.theme.colors.gray};

    @media (max-width: ${props => props.theme.breakpoints.LG}px) {
      display: none;
    }
  }
`;

export const WrapperImage = styled.div`
  margin-right: 8px;
  position: relative;
  width: 70px;
  height: 70px;

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    width: 48px;
    height: 48px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoName = styled.span`
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    font-size: 22px;
    line-height: 22px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    font-size: 19px;
    line-height: 19px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    font-size: 17px;
    line-height: 17px;
  }
`;

export const LogoDesc = styled.span`
  text-transform: lowercase;
  color: ${props => props.theme.colors.gray};
  line-height: 16px;

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    font-size: 14px;
    line-height: 14px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    font-size: 12.25px;
    line-height: 12.25px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    font-size: 11px;
    line-height: 11px;
  }
`;
