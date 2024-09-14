'use client';

import styled, { css } from 'styled-components';

interface ITotalPriceStyleProps {
  $isSalePrice: boolean;
}

export const TotalPrice = styled.span<ITotalPriceStyleProps>`
  display: inline-block;

  ${props =>
    props.$isSalePrice
      ? css`
          font-size: 14px;
          line-height: 16px;
          color: ${props.theme.colors.red};
        `
      : css`
          font-size: 12px;
          line-height: 16px;
          text-decoration: line-through;
        `}
`;
