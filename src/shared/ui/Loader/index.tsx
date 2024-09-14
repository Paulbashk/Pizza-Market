'use client';

import FadeLoader from 'react-spinners/FadeLoader';
// eslint-disable-next-line max-len
import { type LoaderHeightWidthRadiusProps } from 'react-spinners/helpers/props';
import { useTheme } from 'styled-components';

export const Loader = (props: LoaderHeightWidthRadiusProps) => {
  const theme = useTheme();
  const { children, color, width, height, ...otherProps } = props;

  return (
    <FadeLoader
      color={color ?? theme.colors.yellow}
      height={width ?? 5}
      width={height ?? 5}
      {...otherProps}
    />
  );
};
