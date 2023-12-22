// function reduceSumByKey<T>(array: T[], key: keyof T): number {
//   return array.reduce((acc, item) => acc + item[key], 0);
// }

export const reduceSumByKey = <T>(array: T[], key: keyof T): number =>
  array.reduce((acc, item) => acc + (item[key] as number), 0);
