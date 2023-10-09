import styled from 'styled-components';
import { ArrowButton } from '@/shared/ui';

export const ArrowButtonLeft = styled(ArrowButton)`
  left: 16px;
`;

export const ArrowButtonRight = styled(ArrowButton)`
  right: 16px;

  svg {
    transform: rotate(180deg);
  }
`;
