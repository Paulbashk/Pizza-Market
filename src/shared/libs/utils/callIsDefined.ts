export const callIsDefined = (callback: (() => void) | undefined) => {
  callback && callback();
};
