import type { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/libs/assets/styles';

export const withRenderTheme = (children: ReactElement | ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
