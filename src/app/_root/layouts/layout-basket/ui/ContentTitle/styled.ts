'use client';

import styled from 'styled-components';
import { CreatedTitle } from '@/shared/ui';
import { SlBasket } from 'react-icons/sl';

export const Title = styled(CreatedTitle('h1'))`
  margin-bottom: 0;
`;

export const TitleIcon = styled(SlBasket)`
  width: 32px;
  height: 32px;
  position: relative;
  top: -4px;

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    width: 26px;
    height: 26px;
    top: -3px;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-bottom: 24px;

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    margin-bottom: 12px;
  }
`;
