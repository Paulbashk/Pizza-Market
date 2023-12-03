import { styled } from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
`;

export const Price = styled.span`
  display: block;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.015em;
  color: ${props => props.theme.colors.black};
  margin-right: 8px;
`;
