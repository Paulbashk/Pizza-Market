import styled, { css } from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    padding: 0 16px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    padding: 0 4px;
  }
`;

interface IPriceProps {
  $isSale?: boolean;
}

const CssPriceWeight = css`
  display: block;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.015em;
  margin-right: 8px;
`;

export const Price = styled.span<IPriceProps>`
  color: ${props => props.theme.colors.black};

  ${props =>
    props.$isSale
      ? css`
          font-size: 14px;
          line-height: 16px;
          margin: 0 auto 0 4px;
          text-decoration: line-through;
          font-weight: 400;

          @media (max-width: ${props.theme.breakpoints.SM}px) {
            font-size: 12px;
            line-height: 14px;
          }
        `
      : css`
          ${CssPriceWeight};

          @media (max-width: ${props.theme.breakpoints.MD}px) {
            font-size: 18px;
            line-height: 22px;
          }

          @media (max-width: ${props.theme.breakpoints.SM}px) {
            position: relative;
            top: -1px;
            font-size: 16px;
            line-height: 20px;
            margin-right: 4px;
          }
        `}
`;

export const PriceSale = styled.span`
  ${CssPriceWeight};
  color: ${props => props.theme.colors.red};
  order: -1;
`;
