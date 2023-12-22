'use client';

import styled, { css } from 'styled-components';

// const HeadTitle1 = `

// `;

const HeadTitle2 = css`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
`;

const HeadTitle3 = css`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
`;

type TypeTagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export const CreatedTitle = (tagName: TypeTagName) => styled(tagName)`
  margin-top: 0;

  ${(tagName === 'h1' || tagName === 'h2') && HeadTitle2}

  ${tagName === 'h3' && HeadTitle3}
`;
