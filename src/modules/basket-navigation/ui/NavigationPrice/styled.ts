import styled, { css } from 'styled-components';

export const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    margin-bottom: 16px;
  }

  span {
    margin: 0;
    font-weight: 700;
  }
`;

interface IStylePriceProps {
  $isSale: boolean;
}

export const Price = styled.span<IStylePriceProps>`
  ${props =>
    props.$isSale
      ? css`
          font-size: 16px;
          line-height: 20px;
          color: ${props.theme.colors.black};
          text-decoration: line-through;
        `
      : css`
          font-size: 32px;
          line-height: 40px;
          letter-spacing: 0.32px;
          color: ${props.theme.colors.yellow};

          @media (max-width: ${props.theme.breakpoints.MD}px) {
            font-size: 28px;
            line-height: 34px;
          }

          @media (max-width: 400px) {
            font-size: 24px;
            line-height: 28px;
          }
        `}
`;
