'use client';

import styled, { css } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface IArrowIconStyles {
  $active: boolean;
}

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  transition: opacity 0.3s ease;
  user-select: none;
  min-width: 260px;

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    min-width: 155px;
    font-size: 16px;
    line-height: 24px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowIcon = styled(MdKeyboardArrowDown)<IArrowIconStyles>`
  width: 20px;
  height: 20px;
  margin-right: 2px;
  color: ${props => props.theme.colors.dark};
  transition: transform 0.3s ease;

  ${props =>
    props.$active &&
    css`
      transform: rotate(-90deg);
    `}
`;

export const Selected = styled.span`
  margin-left: 4px;
  font-size: inherit;
  line-height: 19px;
  font-weight: 400;
  color: ${props => props.theme.colors.yellow};
`;
