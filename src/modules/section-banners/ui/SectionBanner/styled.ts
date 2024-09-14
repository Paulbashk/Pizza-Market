'use client';

import { Section as ImportSection } from '@/shared/ui';
import styled from 'styled-components';

export const Section = styled(ImportSection)`
  max-width: 100%;
  background-color: transparent;
  box-shadow: unset;
  position: relative;
  height: 420px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    height: 370px;
  }

  @media (max-width: 1024px) {
    height: 340px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    height: 290px;
  }

  @media (max-width: 800px) {
    height: 250px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    height: 210px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }

  @media (max-width: 340px) {
    height: 100px;
  }
`;
