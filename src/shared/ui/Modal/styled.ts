import styled from 'styled-components';

export const MainModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const ModalWindow = styled.div`
  position: relative;
  max-width: 616px;
  width: 616px;
  min-height: 120px;
  padding: 24px;
  background-color: ${props => props.theme.colors.white};
  z-index: 1;
  border-radius: 16px;
`;
