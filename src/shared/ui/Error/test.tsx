import { renderApp } from '@/test/utils';
import { screen } from '@testing-library/react';
import Error from './index';

describe('UI Error', () => {
  it('should render', () => {
    const { container } = renderApp(<Error>Error page</Error>, {});

    expect(container).toMatchSnapshot();

    expect(screen.getByText(/Error page/)).toBeInTheDocument();
  });

  it('should render with props example className', () => {
    const { container } = renderApp(
      <Error className="error-test">Error page</Error>,
      {},
    );

    expect(container).toMatchSnapshot();

    const error = screen.getByText(/Error page/);

    expect(screen.getByText(/Error page/)).toBeInTheDocument();
    expect(error).toHaveClass('error-test');
  });

  it('should accept invalid child', () => {
    renderApp(
      <Error>
        Text
        {null}
      </Error>,
      {},
    );
  });
});
