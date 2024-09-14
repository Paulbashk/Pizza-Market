type TUseWindowWidth = () => {
  isDesktop: boolean;
  isLarge: boolean;
  isMobile: boolean;
  isSmallMobile: boolean;
  width: number;
};

export const useWindowWidth: TUseWindowWidth = () => {
  const width = document.documentElement.clientWidth;

  return {
    isDesktop: width > 992,
    isLarge: width <= 992 && width > 768,
    isMobile: width <= 768,
    isSmallMobile: width <= 576,
    width,
  };
};
