import { screen } from '@testing-library/react';
import { renderApp } from '@/test/utils';
import { ArrowButton } from '.';

describe('UI ArrowButton', () => {
  it('should render', () => {
    const { container } = renderApp(<ArrowButton />, {});

    expect(container).toMatchSnapshot();

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should render with props example className', () => {
    const { container } = renderApp(<ArrowButton className="test-class" />, {});

    expect(container).toMatchSnapshot();

    const button = screen.getByRole('button');

    expect(button).toHaveClass('test-class');
  });
});
