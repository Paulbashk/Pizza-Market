'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const BannerImage = styled(Image)`
  border-radius: 16px;
  height: 420px;
`;

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
