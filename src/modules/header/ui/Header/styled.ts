'use client';

import styled from 'styled-components';
import { Wrapper } from '@/shared/ui';

export const Header = styled.header`
  max-width: 100%;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9998;
  height: 102px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    height: 94px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    height: 84px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    height: 72px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    height: 60px;
  }
`;

export const WrapperHeader = styled(Wrapper)`
  padding: 16px 40px;
  display: flex;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    padding: 12px 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    column-gap: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    padding: 12px 16px;
    column-gap: 16px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    padding-top: 10px;
    padding-bottom: 10px;
    column-gap: 12px;
  }
`;
