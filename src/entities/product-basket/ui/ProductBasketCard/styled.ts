'use client';

import styled, { css } from 'styled-components';
import { CreatedTitle } from '@/shared/ui';

export const Product = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f4f4f4;
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 16px;

  img {
    object-fit: contain;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  width: 320px;
  margin-right: 16px;

  p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: ${props => props.theme.colors.gray};
    margin: 0;
  }
`;

export const Title = styled(CreatedTitle('h3'))`
  margin-bottom: 0;
  hyphens: auto;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-left: auto;
  margin-right: 16px;
`;

const SpanBold = css`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.22px;
  color: ${props => props.theme.colors.black};
`;

export const Count = styled.span`
  ${SpanBold}
  display: block;
  min-width: 30px;
  text-align: center;
  line-height: 30px;
`;

export const WrapperPrice = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-right: 16px;
  min-width: 80px;
  margin-left: auto;
`;

export const TotalQuantityPrice = styled.span`
  ${SpanBold}
  line-height: 24px;
`;

export const TotalPrice = styled.span`
  display: inline-block;
  font-size: 14px;
  padding-right: 5px;
  line-height: 16px;
`;

export const WrapperDelete = styled.div`
  margin-left: auto;
`;
