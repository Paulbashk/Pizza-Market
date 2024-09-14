import styled from 'styled-components';
import { CreatedTitle } from '@/shared/ui';

export const Title = styled(CreatedTitle('h3'))`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 24px;

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    margin-bottom: 16px;
  }
`;
