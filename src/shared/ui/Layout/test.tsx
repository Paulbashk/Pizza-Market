import React from 'react';
import { renderApp } from '@/test/utils';
import { screen } from '@testing-library/react';
import Layout from './index';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: Array<React.ReactElement> }) => children,
}));

describe('UI Layout', () => {
  it('should render', () => {
    const title = 'title page';

    const { container } = renderApp(<Layout title={title}>Content</Layout>, {});

    expect(container).toMatchSnapshot();

    expect(screen.getByText(title)).toBeInTheDocument();

    expect(screen.getByText(/Content/)).toBeInTheDocument();
  });
});
