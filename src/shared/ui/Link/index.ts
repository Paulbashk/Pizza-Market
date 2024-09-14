'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const OrangeLink = styled(Link)`
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;
  color: #fe5f1e;
  transition: opacity 0.3s linear;
  opacity: 1;

  &:hover {
    opacity: 0.75;
  }
`;
