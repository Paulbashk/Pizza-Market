'use client';

import styled from 'styled-components';
import { Wrapper, Button as ButtonImport } from '@/shared/ui';

export const WrapperFlex = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 30px;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    column-gap: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    flex-direction: column;
    row-gap: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    row-gap: 16px;
  }
`;

export const WrapperOrder = styled(Wrapper)`
  width: 380px;
  padding: 32px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    padding: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    padding: 16px;
  }
`;

export const Button = styled(ButtonImport)`
  width: 100%;
  padding: 18px 20px;
`;
