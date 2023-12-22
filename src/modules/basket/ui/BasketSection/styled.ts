'use client';

import styled from 'styled-components';
import { CreatedTitle, Wrapper } from '@/shared/ui';
import { SlBasket } from 'react-icons/sl';

export const WrapperFlex = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 30px;
  position: relative;
`;

export const WrapperBasket = styled(Wrapper)`
  flex: 1;
  padding: 40px;
`;

export const WrapperOrder = styled(Wrapper)`
  width: 380px;
  padding: 32px;
  position: sticky;
  top: 0;
  left: 0;
`;

export const TitleBasket = styled(CreatedTitle('h1'))`
  margin-bottom: 0;
`;

export const TitleIcon = styled(SlBasket)`
  width: 32px;
  height: 32px;
  position: relative;
  top: -4px;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-bottom: 24px;
`;

export const TitleOrder = styled.div``;
