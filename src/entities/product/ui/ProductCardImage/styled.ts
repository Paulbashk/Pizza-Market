import { styled } from 'styled-components';

export const WrapperImage = styled.div`
  margin-bottom: 16px;
  min-height: 235px;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    min-height: 180px;
    margin-bottom: 8px;
  }

  img {
    max-height: 235px;
    object-fit: contain;

    @media (max-width: ${props => props.theme.breakpoints.XL}px) {
      max-height: 205px;
    }

    @media (max-width: ${props => props.theme.breakpoints.LG}px) {
      max-height: 180px;
    }
  }
`;
