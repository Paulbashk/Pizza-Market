'use client';

import styled from 'styled-components';
import { Wrapper } from '@/shared/ui';

export const Header = styled.div`
  max-width: 100%;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9998;
`;

export const WrapperHeader = styled(Wrapper)`
  padding: 16px 40px;
  display: flex;
  align-items: center;
`;
