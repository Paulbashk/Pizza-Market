import React from 'react';
import { renderApp } from '@/test/utils';
import { screen } from '@testing-library/react';
import withQueryResolver from './index';

interface IMockReturnQuerySelector {
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

type TMockQuerySelector = () => IMockReturnQuerySelector;

interface IMockUseQuerySelector {
  selector: TMockQuerySelector;
}

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Swiper-testId">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="SwiperSlide-testId">{children}</div>
  ),
}));

jest.mock('swiper/scss', jest.fn());
jest.mock('swiper/scss/effect-coverflow', jest.fn());
jest.mock('swiper/scss/pagination', jest.fn());
jest.mock('swiper/scss/navigation', jest.fn());
jest.mock('swiper/scss/autoplay', jest.fn());

jest.mock('hex-rgb', () => () => '');

jest.mock('swiper', () => ({
  Navigation: () => null,
  Pagination: () => null,
  Scrollbar: () => null,
  A11y: () => null,
}));

jest.mock('../../libs/hooks', () => ({
  useQuerySelector: ({ selector }: IMockUseQuerySelector) => {
    const query = selector();

    return query;
  },
}));

describe('withQueryResolver', () => {
  const List = () => <div data-testid="List" />;

  const MockLoader = () => <div data-testid="Loader" />;

  it('should show loading when isLoading = true', () => {
    const mockQuerySelector = jest.fn(() => ({
      isLoading: true,
      isError: false,
      error: 'Error Text',
    }));

    const WithQuery = withQueryResolver(List, {
      actionName: 'fetchProducts',
      arg: { category: 0 },
      selector: mockQuerySelector,
    })(MockLoader);

    const { container } = renderApp(<WithQuery />);

    expect(container).toMatchSnapshot();

    expect(screen.queryByTestId('List')).toBeNull();
    expect(screen.getByTestId('Loader')).toBeInTheDocument();
    expect(screen.queryByText('Error Text')).toBeNull();
  });

  it('should render the child component when isLoading = false', () => {
    const mockQuerySelector = jest.fn(() => ({
      isLoading: false,
      isError: false,
      error: 'Error Text',
    }));

    const WithQuery = withQueryResolver(List, {
      actionName: 'fetchProducts',
      arg: { category: 0 },
      selector: mockQuerySelector,
    })(MockLoader);

    renderApp(<WithQuery />);

    expect(screen.getByTestId('List')).toBeInTheDocument();
    expect(screen.queryByTestId('Loader')).toBeNull();
    expect(screen.queryByText('Error Text')).toBeNull();
  });

  it('should display an error when isError = true', () => {
    const mockQuerySelector = jest.fn(() => ({
      isLoading: false,
      isError: true,
      error: 'Error Text',
    }));

    const WithQuery = withQueryResolver(List, {
      actionName: 'fetchProducts',
      arg: { category: 0 },
      selector: mockQuerySelector,
    })(MockLoader);

    const { container } = renderApp(<WithQuery />);

    expect(container).toMatchSnapshot();

    expect(screen.queryByTestId('List')).toBeNull();
    expect(screen.queryByTestId('Loader')).toBeNull();
    expect(screen.getByText('Error Text')).toBeInTheDocument();
  });

  it('should show loading when isLoading = true, isError = true', () => {
    const mockQuerySelector = jest.fn(() => ({
      isLoading: true,
      isError: true,
      error: 'Error Text',
    }));

    const WithQuery = withQueryResolver(List, {
      actionName: 'fetchProducts',
      arg: { category: 0 },
      selector: mockQuerySelector,
    })(MockLoader);

    renderApp(<WithQuery />);

    expect(screen.queryByTestId('List')).toBeNull();
    expect(screen.getByTestId('Loader')).toBeInTheDocument();
    expect(screen.queryByText('Error Text')).toBeNull();
  });

  it('selector function must be called and return states', () => {
    const mockQuerySelector = jest.fn(() => ({
      isLoading: true,
      isError: true,
      error: 'Error Text',
    }));

    const WithQuery = withQueryResolver(List, {
      actionName: 'fetchProducts',
      arg: { category: 0 },
      selector: mockQuerySelector,
    })(MockLoader);

    renderApp(<WithQuery />);

    expect(mockQuerySelector.mock.calls).toHaveLength(1);
  });

  it('prop check: LoaderComponent can accept a component', () => {
    const mockQuerySelector = jest.fn(() => ({
      isLoading: true,
      isError: true,
      error: 'Error Text',
    }));

    const WithQuery = withQueryResolver(List, {
      actionName: 'fetchProducts',
      arg: { category: 0 },
      selector: mockQuerySelector,
    })(MockLoader);

    renderApp(<WithQuery />);

    expect(screen.getByTestId('Loader')).toBeInTheDocument();
  });

  it('prop check: LoaderComponent can accept a jsx', () => {
    const mockQuerySelector = jest.fn(() => ({
      isLoading: true,
      isError: false,
      error: undefined,
    }));

    const WithQuery = withQueryResolver(List, {
      actionName: 'fetchProducts',
      arg: { category: 0 },
      selector: mockQuerySelector,
    })(<MockLoader />);

    renderApp(<WithQuery />);

    expect(screen.getByTestId('Loader')).toBeInTheDocument();
  });
});
