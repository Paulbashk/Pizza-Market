export const objectComparsion = (obj1: object, obj2: object): boolean =>
  JSON.stringify(obj1) === JSON.stringify(obj2);
