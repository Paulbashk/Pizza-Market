import styled from 'styled-components';
import { CircleButton as ImportCircleButton } from '@/shared/ui';

export const CircleButton = styled(ImportCircleButton)`
  &:hover {
    svg {
      fill: ${props => props.theme.colors.white};
    }
  }

  svg {
    fill: ${props => props.theme.colors.dark};
    width: 12px;
    height: 12px;
  }
`;
