type TUseScrollToAnchor = (offset?: number) => (targetAnchor: string) => void;

export const useScrollToAnchor: TUseScrollToAnchor =
  (offset = 0) =>
  targetAnchor => {
    if (!(typeof window === 'undefined')) {
      const hash = targetAnchor;

      const startWithHashRegex = /^#\w+/g;
      const targetElement = document?.querySelector(`${hash}`);

      if (!startWithHashRegex.test(hash) || !targetElement) {
        return;
      }

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      const scroll = () => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      };

      requestAnimationFrame(scroll);
    }
  };
