import styled from 'styled-components';
import { CreatedTitle } from '@/shared/ui';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(CreatedTitle('h3'))`
  text-align: center;
  color: ${props => props.theme.colors.black};
  margin-bottom: 16px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    margin-bottom: 12px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    margin-bottom: 8px;
  }
`;
