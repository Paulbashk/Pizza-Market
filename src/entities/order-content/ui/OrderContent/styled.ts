'use client';

import { CreatedTitle } from '@/shared/ui';
import styled from 'styled-components';
import { MdOutlineLocalPizza } from 'react-icons/md';

export const Content = styled.div`
  padding: 80px 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 640px;
  align-items: center;
  text-align: center;
  row-gap: 56px;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    row-gap: 20px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const IconPizza = styled(MdOutlineLocalPizza)`
  width: 240px;
  height: 240px;
  color: ${props => props.theme.colors.orange};

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    width: 160px;
    height: 160px;
  }
`;

export const Title = styled(CreatedTitle('h1'))`
  letter-spacing: 1px;
  margin: 0;
`;
