import { FC } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// redux store
import { Provider } from 'react-redux';
import { wrapper } from '@/store';

// styles
import { GlobalStyle, theme } from '@/shared/libs/assets/styles';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
