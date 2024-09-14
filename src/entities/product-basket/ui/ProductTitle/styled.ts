'use client';

import styled from 'styled-components';
import { CreatedTitle } from '@/shared/ui';

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  width: 320px;
  margin-right: 16px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    width: 210px;
    margin-right: 12px;
  }

  @media (max-width: 1100px) {
    width: 180px;
  }

  @media (max-width: 1024px) {
    width: 160px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    width: 280px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    width: 150px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    grid-column: 1;
    grid-row: 2;
    width: auto;
    max-width: 150px;
  }

  p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: ${props => props.theme.colors.gray};
    margin: 0;

    @media (max-width: ${props => props.theme.breakpoints.XL}px) {
      font-size: 16px;
      line-height: 20px;
    }

    @media (max-width: ${props => props.theme.breakpoints.MD}px) {
      font-size: 14px;
      line-height: 16px;
    }

    @media (max-width: 400px) {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

export const Title = styled(CreatedTitle('h3'))`
  margin-bottom: 0;
  hyphens: auto;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
