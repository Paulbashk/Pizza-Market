import styled from 'styled-components';
import { Wrapper as WrapperImport } from '@/shared/ui';

export const Wrapper = styled(WrapperImport)`
  width: 380px;
  padding: 32px;
  position: sticky;
  top: calc(102px + 24px);
  left: 0;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    top: calc(94px + 24px);
    padding: 24px;
  }

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    position: static;
    width: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    padding: 16px;
  }
`;
