import React from 'react';
import { renderApp } from '@/test/utils';
import { SwiperSlide } from 'swiper/react';
import { screen } from '@testing-library/react';
import Slider from './index';

jest.mock('swiper/react', () => ({
  Swiper: ({
    children,
    onBeforeInit,
  }: {
    children: React.ReactNode;
    onBeforeInit?: () => void;
  }) => {
    if (onBeforeInit) {
      onBeforeInit();
    }

    return <div data-testid="Swiper-testId">{children}</div>;
  },
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="SwiperSlide-testId">{children}</div>
  ),
}));

jest.mock('swiper/scss', jest.fn());
jest.mock('swiper/scss/effect-coverflow', jest.fn());
jest.mock('swiper/scss/pagination', jest.fn());
jest.mock('swiper/scss/navigation', jest.fn());
jest.mock('swiper/scss/autoplay', jest.fn());

jest.mock('swiper', () => ({
  Navigation: () => null,
  Pagination: () => null,
  Scrollbar: () => null,
  A11y: () => null,
}));

describe('Slider (Swiper)', () => {
  it('should render with 5 slides', () => {
    const { container } = renderApp(
      <Slider>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
      </Slider>,
    );

    expect(container).toMatchSnapshot();

    const slides = screen.getAllByTestId('SwiperSlide-testId');
    expect(slides.length).toBe(5);
  });

  it('check prop: call onBeforeInit', () => {
    const mockBeforeInit = jest.fn();

    const { container } = renderApp(
      <Slider onBeforeInit={mockBeforeInit}>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
      </Slider>,
    );

    expect(container).toMatchSnapshot();

    expect(mockBeforeInit).toBeCalledTimes(1);
  });
});
