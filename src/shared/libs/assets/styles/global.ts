import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fontBase}, system-ui, -apple-system, 
    BlinkMacSystemFont,  'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, 
    Cantarell, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 
    'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    background-color: ${theme.colors.darkyellow};
    color: ${theme.colors.dark};
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  main {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding: 60px 0;
  }
`;

export default GlobalStyle;
