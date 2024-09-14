import { styled } from 'styled-components';
import { MdClose } from 'react-icons/md';

export const ModalClose = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 1;
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
