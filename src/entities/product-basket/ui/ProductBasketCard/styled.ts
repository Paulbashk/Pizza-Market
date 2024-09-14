import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f4f4f4;

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    padding-top: 8px;
    row-gap: 6px;
  }

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: 140px 1fr;
    row-gap: 4px;
  }
`;
