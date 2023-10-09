import styled from 'styled-components';
import hexRgb from 'hex-rgb';

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownInner = styled.div`
  position: absolute;
  right: 0;
  transform: translateY(-10px);
  padding-top: 10px;
`;

export const DropdownContent = styled.div`
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  min-width: 160px;
  padding: 12px 0;
  margin: 5px 0;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.white};
  z-index: 100;
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;

  li {
    display: block;
    padding: 10px 16px;
    transition: background-color 0.3s ease;
    margin: 4px 0;
  }

  li:hover {
    cursor: pointer;
    background: ${props =>
      hexRgb(props.theme.colors.yellow, { alpha: 0.25, format: 'css' })};
  }
`;
