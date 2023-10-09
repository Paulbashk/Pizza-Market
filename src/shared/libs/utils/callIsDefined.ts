const callIsDefined = (callback: (() => void) | undefined) => {
  callback && callback();
};

export default callIsDefined;
