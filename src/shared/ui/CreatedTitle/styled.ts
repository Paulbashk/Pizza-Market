'use client';

import styled, { css } from 'styled-components';

const HeadTitle2 = css`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    font-size: 28px;
    line-height: 36px;
  }

  @media (max-width: ${props => props.theme.breakpoints.MD}px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const HeadTitle3 = css`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;

  @media (max-width: ${props => props.theme.breakpoints.XL}px) {
    font-size: 18px;
    line-height: 26px;
  }

  @media (max-width: ${props => props.theme.breakpoints.SM}px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

type TTagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export const CreatedTitle = (tagName: TTagName) => styled(tagName)`
  margin-top: 0;

  ${(tagName === 'h1' || tagName === 'h2') && HeadTitle2}

  ${tagName === 'h3' && HeadTitle3}
`;
