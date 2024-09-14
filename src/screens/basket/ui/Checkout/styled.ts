import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  max-width: 76.62%;
  min-width: 590px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    row-gap: 24px;
    min-width: unset;
    max-width: unset;
    width: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    max-width: 80%;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    max-width: unset;
  }
`;
