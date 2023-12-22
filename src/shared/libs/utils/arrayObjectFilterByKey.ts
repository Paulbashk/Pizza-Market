export const arrayObjectFilterByKey = <T extends Record<string, unknown>, B>(
  array: T[],
  key: keyof T,
  value: B,
): T[] => array.filter(item => item[key] === value);
