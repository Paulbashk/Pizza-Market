'use client';

import styled from 'styled-components';
import { Section as ImportSection } from '@/shared/ui';

export const Section = styled(ImportSection)`
  padding: 40px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;
