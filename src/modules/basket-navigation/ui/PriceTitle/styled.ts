import styled from 'styled-components';

export const Title = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.32px;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    font-size: 28px;
    line-height: 34px;
  }

  @media (max-width: 400px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
