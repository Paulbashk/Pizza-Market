import 'styled-components';
import { proximaNova } from '@/shared/libs/assets/fonts';

const colors = {
  darkyellow: '#ffdd8a',
  yellow: '#f9b31f',
  gray: '#b7b7b7',
  lightgray: '#f6f6f6',
  dark: '#292729',
  white: '#fff',
  black: '#000',
};

const breakpoints = {
  XXL: 1400,
  XL: 1200,
  LG: 992,
  MD: 768,
  SM: 576,
};

export const theme = {
  fontBase: proximaNova.style.fontFamily,
  colors,
  breakpoints,
} as const;

type TypeTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends TypeTheme {}
}
