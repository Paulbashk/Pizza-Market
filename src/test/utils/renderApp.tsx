import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/shared/libs/assets/styles';
import {
  type AppState,
  type AppStore,
  persistedReducer,
} from '@/app/_root/store';
import { type RenderOptions, render } from '@testing-library/react';
import { type PreloadedState, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

interface IExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  reducer?: typeof persistedReducer;
  preloadedState?: PreloadedState<AppState>;
  store?: AppStore;
}

const renderApp = (
  ui: React.ReactElement,
  {
    reducer = persistedReducer,
    preloadedState = {},
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  }: IExtendedRenderOptions = {},
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
