import { renderApp } from '@/test/utils';
import React from 'react';
import { screen } from '@testing-library/react';
import Section from './index';

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

describe('Section', () => {
  it('should render with children', () => {
    renderApp(
      <Section>
        <p>Content</p>
      </Section>,
      {},
    );

    const content = screen.getByText('Content');
    expect(content).toBeInTheDocument();

    const section = content.closest('section');
    expect(section).toHaveClass('section');
  });

  it('should render with prop name', () => {
    const classNameSection = 'section-about';

    const { container } = renderApp(
      <Section name={classNameSection}>
        <p>Content</p>
      </Section>,
      {},
    );

    expect(container).toMatchSnapshot();

    const content = screen.getByText('Content');
    const section = content.closest('section');
    expect(section).toHaveClass(classNameSection);
  });

  it('should accept invalid child', () => {
    renderApp(
      <Section>
        <p />
        {null}
      </Section>,
    );
  });

  it('should render with other prop', () => {
    const idWrapper = 'test-id';

    const { container } = renderApp(
      <Section id={idWrapper} data-testid="wrapper">
        Text
      </Section>,
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByTestId('wrapper')).toHaveAttribute('id', idWrapper);
  });
});
