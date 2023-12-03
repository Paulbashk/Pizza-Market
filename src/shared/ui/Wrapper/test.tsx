import { renderApp } from '@/test/utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { Wrapper } from '.';

jest.mock('hex-rgb', () => () => '');

jest.mock('swiper/scss', jest.fn());
jest.mock('swiper/scss/effect-coverflow', jest.fn());
jest.mock('swiper/scss/pagination', jest.fn());
jest.mock('swiper/scss/navigation', jest.fn());
jest.mock('swiper/scss/autoplay', jest.fn());

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Swiper-testId">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="SwiperSlide-testId">{children}</div>
  ),
}));

jest.mock('swiper', () => ({
  Navigation: () => null,
  Pagination: () => null,
  Scrollbar: () => null,
  A11y: () => null,
}));

describe('Wrapper', () => {
  it('should render with children', () => {
    const { container } = renderApp(
      <Wrapper>
        <p>Content</p>
      </Wrapper>,
      {},
    );

    expect(container).toMatchSnapshot();

    const content = screen.getByText('Content');
    expect(content).toBeInTheDocument();
  });

  it('should render with other prop', () => {
    const idWrapper = 'test-id';

    const { container } = renderApp(
      <Wrapper id={idWrapper} data-testid="wrapper">
        Text
      </Wrapper>,
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByTestId('wrapper')).toHaveAttribute('id', idWrapper);
  });

  it('should accept invalid child', () => {
    renderApp(
      <Wrapper>
        <p />
        {null}
      </Wrapper>,
    );
  });
});
