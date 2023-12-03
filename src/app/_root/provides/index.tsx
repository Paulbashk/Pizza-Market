'use client';

import { type PropsWithChildren } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

// redux store
import { Provider } from 'react-redux';
import { persistor, store } from '@/app/_root/store';

// styles
import { GlobalStyle, theme } from '@/shared/libs/assets/styles';
import StyledComponentsRegistry from '@/app/_root/styled';

const RootProvides = ({ children }: PropsWithChildren) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </PersistGate>
  </Provider>
);

export default RootProvides;
