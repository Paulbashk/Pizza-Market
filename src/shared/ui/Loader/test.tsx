import { renderApp } from '@/test/utils';
import { screen } from '@testing-library/react';
import { Loader } from '.';

describe('UI Loader', () => {
  it('should render nothing is loading prop is false', () => {
    const { container } = renderApp(<Loader loading={false} />, {});

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toBeNull();
  });

  it('should have allow style override on wrapper', () => {
    const style = { overflow: 'scroll' };
    const { container } = renderApp(<Loader cssOverride={style} />, {});

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle(style);
  });

  it('should have allow custom html props', () => {
    const { container } = renderApp(<Loader aria-label="aria-label" />, {});

    expect(container).toMatchSnapshot();
    expect(screen.queryByLabelText('aria-label')).toBeTruthy();
  });
});
