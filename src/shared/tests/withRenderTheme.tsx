import { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/libs/assets/styles';

const withRenderTheme = (children: ReactElement | ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export default withRenderTheme;
