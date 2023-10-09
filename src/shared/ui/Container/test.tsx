import { renderApp } from '@/test/utils';
import Container from './index';

describe('UI Container', () => {
  it('should render with content', () => {
    const { container } = renderApp(<Container>Content</Container>, {});

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render with props example className', () => {
    const { container } = renderApp(
      <Container className="container-test">Content</Container>,
      {},
    );

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveClass('container-test');
  });

  it('should accept invalid child', () => {
    renderApp(
      <Container>
        <p /> {null}
      </Container>,
      {},
    );
  });
});
