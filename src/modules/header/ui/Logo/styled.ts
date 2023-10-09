import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  user-select: none;
  margin-right: 32px;
  color: ${props => props.theme.colors.dark};

  &::after {
    content: '';
    display: block;
    height: 40px;
    margin-left: 32px;
    border-left: 1px solid ${props => props.theme.colors.gray};
  }
`;

export const LogoImage = styled(Image)`
  width: 70px;
  min-width: 70px;
  margin-right: 8px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoName = styled.span`
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const LogoDesc = styled.span`
  text-transform: lowercase;
  color: ${props => props.theme.colors.gray};
  line-height: 16px;
`;
