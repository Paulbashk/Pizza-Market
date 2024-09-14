'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.div`
  width: 100%;
  height: 420px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

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

export const BannerImage = styled(Image)`
  border-radius: 16px;
`;
