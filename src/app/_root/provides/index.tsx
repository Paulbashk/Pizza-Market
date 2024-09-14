'use client';

import { type PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

// redux store
import { RootStore } from '@/app/_root/store';

// styles
import { GlobalStyle, theme } from '@/shared/libs/assets/styles';
import StyledComponentsRegistry from '@/app/_root/styled';

const RootProvides = ({ children }: PropsWithChildren) => (
  <RootStore>
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  </RootStore>
);

export default RootProvides;
