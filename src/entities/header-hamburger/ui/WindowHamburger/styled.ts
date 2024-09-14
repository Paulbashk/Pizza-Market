'use client';

import styled, { css } from 'styled-components';
import { Wrapper, Container } from '@/shared/ui';
import { MdClose } from 'react-icons/md';

interface IWindowStyles {
  $visible: boolean;
}

export const Window = styled.div<IWindowStyles>`
  position: absolute;
  top: -50vh;
  left: 0;
  width: 100%;
  opacity: 0;
  pointer-events: none;
  transition-property: opacity, top;
  transition-duration: 0.3s;
  transition-timing-function: linear;

  ${props =>
    props.$visible &&
    css`
      pointer-events: all;
      opacity: 1;
      top: 0;
    `}
`;

export const WrapContainer = styled(Container)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const WrapClose = styled.div`
  position: absolute;
  right: 18px;
  top: 26px;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    right: 10px;
    top: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    top: 15px;
  }
`;

export const CloseIcon = styled(MdClose)`
  color: ${props => props.theme.colors.black};
  width: 32px;
  height: 32px;
  opacity: 1;
  transition: opacity 0.3s linear;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const WrapContent = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  min-height: 360px;
  padding: 24px;
  position: relative;

  > ul {
    flex-direction: column;
    text-align: center;
    row-gap: 16px;
    margin: auto;
  }
`;
