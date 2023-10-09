import styled, { css } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface ArrowIconStyles {
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

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ArrowIcon = styled(MdKeyboardArrowDown)<ArrowIconStyles>`
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
