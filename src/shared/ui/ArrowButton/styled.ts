import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.black};
  opacity: 0.4;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border: unset;
  outline: unset;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  transition: opacity 0.3s ease;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  svg {
    display: block;
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    position: relative;
    top: -1px;
    color: ${props => props.theme.colors.white};
  }
`;
