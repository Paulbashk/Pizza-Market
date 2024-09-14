import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 16px;
  margin-right: 32px;
  min-height: 40px;

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    margin-right: 24px;
    column-gap: 8px;
    row-gap: 12px;
    min-height: 35px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    margin-right: 16px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    margin-right: 0;
    column-gap: 8px;
    row-gap: 8px;
    min-height: unset;
  }
`;
