'use client';

import styled, { css } from 'styled-components';

const SpanBold = css`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.22px;
  color: ${props => props.theme.colors.black};

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    grid-column: 2;
    grid-row: span 2;
    display: grid;
    row-gap: 8px;
    column-gap: 8px;
    height: 100%;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-left: auto;
  margin-right: 16px;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    margin-right: 12px;
    column-gap: 4px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    margin-right: 8px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    grid-row: 2;
    grid-column: 2;
    margin-right: 0;
    justify-content: flex-end;
    margin: auto 0;
  }
`;

export const Count = styled.span`
  ${SpanBold}
  display: block;
  min-width: 30px;
  text-align: center;
  line-height: 30px;
`;

export const ContainerPrice = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-right: 16px;
  min-width: 80px;
  margin-left: auto;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    margin-right: 12px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    margin-right: 8px;
    min-width: 72px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    grid-row: 1;
    grid-column: 2;
    margin-right: 0;
    margin-top: auto;
  }
`;

export const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  padding-right: 4px;
  column-gap: 4px;

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    padding-right: 0;
  }

  span:nth-child(1) {
    color: ${props => props.theme.colors.black};
  }
`;

export const TotalQuantityPrice = styled.span`
  ${SpanBold}
  line-height: 24px;
`;
