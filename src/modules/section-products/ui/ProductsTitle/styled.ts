import styled from 'styled-components';
import { CreatedTitle } from '@/shared/ui';

export const Title = styled(CreatedTitle('h2'))`
  margin-bottom: 32px;

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    margin-bottom: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    margin-bottom: 16px;
  }
`;
