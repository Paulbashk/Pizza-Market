import styled from 'styled-components';

export const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 40px;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    margin-bottom: 32px;
    row-gap: 8px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    margin-bottom: 24px;
  }
`;
