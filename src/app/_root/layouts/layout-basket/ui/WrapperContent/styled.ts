import styled from 'styled-components';
import { Wrapper } from '@/shared/ui';

export const WrapperContent = styled(Wrapper)`
  flex: 1;
  padding: 40px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    padding: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    width: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    padding: 16px;
  }
`;
