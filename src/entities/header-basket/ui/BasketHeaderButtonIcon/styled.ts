'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { IoMdBasket } from 'react-icons/io';

export const BasketLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const BasketIcon = styled(IoMdBasket)`
  width: 28px;
  height: 28px;
  fill: ${props => props.theme.colors.yellow};
  position: relative;
  top: -1px;
`;
