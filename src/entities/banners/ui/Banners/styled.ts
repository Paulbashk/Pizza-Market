import styled from 'styled-components';

export const WrapperLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  min-height: inherit;
  border-radius: 16px;
`;
