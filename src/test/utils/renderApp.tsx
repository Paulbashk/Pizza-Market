import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/shared/libs/assets/styles';
import { AppState, AppStore, rootReducer } from '@/store';
import { RenderOptions, render } from '@testing-library/react';
import { PreloadedState, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  reducer?: typeof rootReducer;
  preloadedState?: PreloadedState<AppState>;
  store?: AppStore;
}

const renderApp = (
  ui: React.ReactElement,
  {
    reducer = rootReducer,
    preloadedState = {},
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  function Wrapper({ children }: { children: React.ReactElement }) {
    return (
      <>
        <GlobalStyle />
        <Provider store={store}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
      </>
    );
  }

  const { rerender, ...otherParamRender } = render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });

  const setProp = <T extends {}>(props: T) =>
    rerender(React.cloneElement(ui, props));

  const update = (newUi: React.ReactElement) => rerender(newUi);

  return { store, ...otherParamRender, setProp, update };
};

export default renderApp;
