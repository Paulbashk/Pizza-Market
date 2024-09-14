'use client';

import styled from 'styled-components';
import { Section as ImportSection } from '@/shared/ui';

export const Section = styled(ImportSection)`
  padding: 40px;
  min-height: 700px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    padding: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    padding: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    margin-bottom: 8px;
    align-items: flex-start;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    margin-bottom: 12px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    justify-content: flex-start;
    flex-direction: column;
    row-gap: 12px;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    row-gap: 8px;
  }

  @media (max-width: 400px) {
    row-gap: 6px;
  }
`;
