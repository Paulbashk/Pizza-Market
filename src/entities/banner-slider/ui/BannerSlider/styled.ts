import styled from 'styled-components';
import { ArrowButton } from '@/shared/ui';

export const ArrowButtonLeft = styled(ArrowButton)`
  left: 16px;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    left: 8px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    left: 4px;
  }
`;

export const ArrowButtonRight = styled(ArrowButton)`
  right: 16px;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    right: 8px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    right: 4px;
  }

  svg {
    transform: rotate(180deg);
  }
`;
